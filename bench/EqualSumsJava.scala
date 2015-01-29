
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class EqualSumsJava extends Simulation {

	val httpProtocol = http
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.connection("keep-alive")
		.userAgentHeader("Valentin load test with Gatling")

    val host = "http://java.bench-equal-sums.appspot.com"

	val caseFeeder = csv("equalSumsInput.csv").circular

	val scn = scenario("EqualSumsJava")
    	.feed(caseFeeder)
		.exec(http("Solver")
			.get(host + """/?case=${case}"""))

	setUp(scn.inject(
//		rampUsers(600) over(10 minutes)
		rampUsersPerSec(0.05) to (4) during (10 minutes)
	)).protocols(httpProtocol)
}