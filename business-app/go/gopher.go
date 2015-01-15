package businessapp

type Gopher struct {
	Id   string
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
