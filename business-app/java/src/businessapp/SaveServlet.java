package businessapp;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class SaveServlet extends HttpServlet {

	@Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
                throws IOException {
    	
    }
    
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {
    	/*
        Key guestbookKey = KeyFactory.createKey("Guestbook", guestbookName);
        String content = req.getParameter("content");
        Entity greeting = new Entity("Greeting", guestbookKey);
        greeting.setProperty("user", user);
        greeting.setProperty("date", date);
        greeting.setProperty("content", content);

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(greeting);

        resp.sendRedirect("/guestbook.jsp?guestbookName=" + guestbookName);
    	 */
    	String idStr = req.getParameter("id");
    	long id = Long.parseLong( idStr );
    	String name = req.getParameter("name");

        Key gopherKey = KeyFactory.createKey("Gopher", id);
        Entity gopher = new Entity(gopherKey);
        gopher.setProperty("Name", name);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        datastore.put(gopher);
        
        resp.sendRedirect("/detail?id="+idStr);
        //req.setAttribute("gopher", gopher);
        //req.setAttribute("id", idStr);
        //req.setAttribute("name", name);
    	//req.getRequestDispatcher("/detail.jsp?id="+idStr).forward(req,resp);
    }
}
