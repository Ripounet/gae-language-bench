package equalsums;

import java.io.IOException;
import java.util.Random;
import javax.servlet.http.*;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class EqualSumsServlet extends HttpServlet {
	
	Random r = new Random(123L);
	
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    	String inputCaseParam = req.getParameter("case");
    	String[] inputCaseStr = inputCaseParam.split(",");
    	long[] inputCase = new long[inputCaseStr.length];
    	for(int i=0;i<inputCaseStr.length;i++)
    		inputCase[i] = Long.parseLong(inputCaseStr[i]);
    	
    	String msg = EqualSums.solve(inputCase);
    	
        resp.setContentType("text/plain");
        resp.getWriter().println("(Java)");
        resp.getWriter().println(msg);
    }
}
