package fortune;

import java.io.IOException;
import java.util.Random;
import javax.servlet.http.*;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class FortuneServlet extends HttpServlet {
	
	Random r = new Random(123L);
	
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/plain");
        resp.getWriter().print("(Java)\n");
        resp.getWriter().print("Tonight you will get ");
        int n = 2 + r.nextInt(10);
        resp.getWriter().print(n);
        resp.getWriter().println(" beers.");
    }
}
