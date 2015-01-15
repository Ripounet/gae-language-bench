package businessapp

import (
	"bytes"
	"encoding/gob"
	"html/template"
	"net/http"

	"appengine"
	"appengine/datastore"
	"appengine/memcache"
)

var t *template.Template

func init() {
	t = template.New("business-app")
	var err error
	t, err = t.ParseGlob("*.html")
	if err != nil {
		panic(err.Error())
	}

	gob.Register(&Gopher{})
	gob.Register([]*Gopher{})

	http.HandleFunc("/", list)
	http.HandleFunc("/detail", detail)
	http.HandleFunc("/save", save)
}

func list(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	var gophers []*Gopher

	// Get the list in Memcache
	cache, err := readCache(c, "gopher-list")
	if err != nil {
		http.Error(w, "While getting the list in Memcache: "+err.Error(), http.StatusInternalServerError)
		return
	}
	if cache == nil {
		// Not found, search the list in the Datastore
		c.Infof("gopher-list not found in Memcache")
		q := datastore.NewQuery("Gopher").Order("Name").Limit(20)
		_, err := q.GetAll(c, &gophers)
		if err != nil {
			http.Error(w, "While getting the list in Datastore: "+err.Error(), http.StatusInternalServerError)
			return
		}

		// Set list in Memcache
		err = writeCache(c, "gopher-list", gophers)
		if err != nil {
			http.Error(w, "While setting the list in Memcache: "+err.Error(), http.StatusInternalServerError)
			return
		}
	} else {
		gophers = cache.([]*Gopher)
	}

	data := map[string]interface{}{
		"Response": "...list response...",
		"Gophers": gophers,
	}
	err = t.ExecuteTemplate(w, "page-list", data)
	if err != nil {
		panic(err.Error())
	}
}

func detail(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	gopherId := r.FormValue("id")

	// Get the gopher in Memcache
	gopher, err := readCache(c, "gopher-"+gopherId)
	if err != nil {
		http.Error(w, "While getting the gopher in Memcache: "+err.Error(), http.StatusInternalServerError)
		return
	}
	if gopher == nil {
		// Not found, get the gopher in the Datastore
		c.Infof("gopher-" + gopherId + " not found in Memcache")
		gopherKey := datastore.NewKey(c, "Gopher", gopherId, 0, nil)
		var gopher Gopher
		err := datastore.Get(c, gopherKey, &gopher)
		if err != nil {
			http.Error(w, "While getting the gopher in Datastore: "+err.Error(), http.StatusInternalServerError)
			return
		}

		// Set gopher in Memcache
		err = writeCache(c, "gopher-"+gopherId, gopher)
		if err != nil {
			http.Error(w, "While setting the gopher in Memcache: "+err.Error(), http.StatusInternalServerError)
			return
		}
	}

	data := map[string]interface{}{
		"Response": "...detail response...",
		"Gopher":   gopher,
	}
	err = t.ExecuteTemplate(w, "page-detail", data)
	if err != nil {
		panic(err.Error())
	}
}

func save(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	gopherId := r.FormValue("id")
	gopherName := r.FormValue("name")
	gopher := Gopher{
		Id:   gopherId,
		Name: gopherName,
	}

	// Save gopher in Datastore
	gopherKey := datastore.NewKey(c, "Gopher", gopherId, 0, nil)
	_, err := datastore.Put(c, gopherKey, &gopher)

	// Set gopher in Memcache
	err = writeCache(c, "gopher-"+gopherId, gopher)
	if err != nil {
		http.Error(w, "While getting gopher-"+gopherId+" in Memcache: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// Invalidate the main list in Memcache
	err = memcache.Delete(c, "gopher-list")
	if err != nil && err != memcache.ErrCacheMiss {
		http.Error(w, "While invalidating gopher-list in Memcache: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// If we redirect to the list, the newly added Gopher is not guaranteed
	// to be there : eventual consistency :(
	//http.Redirect(w, r, "/", http.StatusFound)

	http.Redirect(w, r, "/detail?id="+gopherId, http.StatusFound)
}

func readCache(c appengine.Context, cacheKey string) (interface{}, error) {
	// Get the item from the memcache
	var cacheItem *memcache.Item
	var err error
	if cacheItem, err = memcache.Get(c, cacheKey); err == memcache.ErrCacheMiss {
		// Item not in the cache
		c.Infof("err == memcache.ErrCacheMiss")
		return nil, nil
	} else if err != nil {
		c.Infof("err != memcache.ErrCacheMiss")
		return nil, err
	} else {
		buffer := bytes.NewBuffer(cacheItem.Value)
		dec := gob.NewDecoder(buffer)
		var data interface{}
		err = dec.Decode(&data)
		return data, err
	}
}

func writeCache(c appengine.Context, cacheKey string, data interface{}) error {
	c.Infof("Caching %v => %v \n", cacheKey, data)
	var buffer bytes.Buffer
	enc := gob.NewEncoder(&buffer)
	err := enc.Encode(&data)
	if err != nil {
		return err
	}
	cacheItem := &memcache.Item{
		Key:   cacheKey,
		Value: buffer.Bytes(),
	}
	return memcache.Set(c, cacheItem)
}
