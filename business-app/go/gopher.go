package businessapp

type Gopher struct {
	Id   int64 `datastore:"-"`
	Name string
}

func (g *Gopher) String() string {
	return "<" + g.Name + ">"
}

type Gophers []*Gopher

func (g Gophers) String() string {
	s := "["
	for _, gopher := range g {
		s += gopher.String()
		s += ", "
	}
	s += "]"
	return s
}
