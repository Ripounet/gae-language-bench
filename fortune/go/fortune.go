package fosdem2015

import "fmt"
import "math/rand"
import "net/http"

func init() {
	http.HandleFunc("/", fortune)
}

func fortune(w http.ResponseWriter, r *http.Request) {
	N := 2 + rand.Intn(10)
	msg := fmt.Sprintf("(Go) Tonight you will get %d beers.", N)
	w.Write([]byte(msg))
}
