package fosdem2015

import "fmt"
import "math/rand"
import "net/http"

func init() {
	http.HandleFunc("/", fortune)
}

func fortune(w http.ResponseWriter, r *http.Request) {
	N := 2 + rand.Intn(10)
	fmt.Fprintf(w, "(Go)\nTonight you will get %d beers.", N)
}
