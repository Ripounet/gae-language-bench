package fosdem2015

import "fmt"
import "math/rand"
import "net/http"

func init() {
	http.HandleFunc("/", fortune)
}

func fortune(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	
	N := 2 + rand.Intn(10)
	fmt.Fprintf(w, "(Go)\nTonight you will get %d beers.", N)
}
