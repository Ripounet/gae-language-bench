package businessapp;

public class GopherFacade {
	String id;
	String name;
	public String getId(){ return id; }
	public String getName(){ return name; }
	public void setId(String i){id=i;}
	public void setName(String n){name=n;}
	public GopherFacade(String i, String n){ id=i; name=n; }
}
