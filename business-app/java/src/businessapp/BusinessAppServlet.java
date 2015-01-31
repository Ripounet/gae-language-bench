package businessapp;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class BusinessAppServlet extends HttpServlet {
	
	@Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {

		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		//Entity gopher = datastore.get(gopherKey);
		
		Query q = new Query("Gopher");
		PreparedQuery pq = datastore.prepare(q);
		List<Entity> entities = pq.asList(FetchOptions.Builder.withLimit(20));
		List<GopherFacade> facades = new ArrayList<>();
		for(Entity e:entities)
			facades.add( new GopherFacade(e.getKey().getId() + "", (String) e.getProperty("Name")) );

        req.setAttribute("gophers", facades);
        
    	//System.out.println("-> /list.jsp");
    	req.getRequestDispatcher("/list.jsp").forward(req,resp);
    }
	
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {
    }
}
