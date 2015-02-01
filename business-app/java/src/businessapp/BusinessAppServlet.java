package businessapp;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.memcache.*;
import org.apache.commons.lang3.SerializationUtils;

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
		ArrayList<GopherFacade> facades;

	    MemcacheService syncCache = MemcacheServiceFactory.getMemcacheService();
	    //syncCache.setErrorHandler(ErrorHandlers.getConsistentLogAndContinue(Level.INFO));
	    String cacheKey = "gopher-list-java";
	    byte[] data = (byte[]) syncCache.get(cacheKey);
	    if (data != null) {
	    	facades = (ArrayList<GopherFacade>) SerializationUtils.deserialize(data);
	    }else{
			DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
			//Entity gopher = datastore.get(gopherKey);
			
			Query q = new Query("Gopher");
			PreparedQuery pq = datastore.prepare(q);
			List<Entity> entities = pq.asList(FetchOptions.Builder.withLimit(20));
			facades = new ArrayList<>();
			for(Entity e:entities)
				facades.add( new GopherFacade(e.getKey().getId() + "", (String) e.getProperty("Name")) );

    		data = SerializationUtils.serialize(facades);
    		syncCache.put(cacheKey, data);
	    }

        req.setAttribute("gophers", facades);
        
    	//System.out.println("-> /list.jsp");
    	req.getRequestDispatcher("/list.jsp").forward(req,resp);
    }
	
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
                throws IOException, ServletException {
    }
}
