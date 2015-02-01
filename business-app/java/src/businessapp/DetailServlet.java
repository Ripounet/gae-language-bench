package businessapp;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.memcache.*;
import org.apache.commons.lang3.SerializationUtils;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class DetailServlet extends HttpServlet {

	@Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {
    	
    	String idStr = req.getParameter("id");
    	long id = Long.parseLong( idStr );

    	try {
    		GopherFacade gopher;
    		
    	    MemcacheService syncCache = MemcacheServiceFactory.getMemcacheService();
    	    //syncCache.setErrorHandler(ErrorHandlers.getConsistentLogAndContinue(Level.INFO));
    	    String cacheKey = "gopher-" + idStr + "-java";
    	    byte[] data = (byte[]) syncCache.get(cacheKey);
    	    if (data != null) {
    	    	gopher = (GopherFacade) SerializationUtils.deserialize(data);
    	    }else{
        		Key gopherKey = KeyFactory.createKey("Gopher", id);
        		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        		Entity entity = datastore.get(gopherKey);
        		if(entity==null){
        			resp.getWriter().print("No gopher " + idStr + " (yet)");
        			return;
        		}
        		
        		gopher = new GopherFacade(
        				gopherKey.getId()+"", 
        				(String) entity.getProperty("Name")
        		);

        		data = SerializationUtils.serialize(gopher);
        		syncCache.put(cacheKey, data);
    	    }

            req.setAttribute("gopher", gopher);
            //req.setAttribute("id", gopherKey.getId());
            //req.setAttribute("name", gopher.getProperty("Name"));
        	req.getRequestDispatcher("/detail.jsp").forward(req,resp);
    	}catch(EntityNotFoundException e){
    		throw new IllegalArgumentException(e);
    	}
    	
    	
    }
    
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {
        
    }
}
