
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class EqualSumsGo extends Simulation {

	val httpProtocol = http
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.connection("keep-alive")
		.userAgentHeader("Valentin load test with Gatling")

    // val host = "http://localhost:8080" 
    val host = "http://go.bench-equal-sums.appspot.com"

	val caseFeeder = csv("equalSumsInput10digits.csv").circular

	val scn = scenario("EqualSumsGo")
    	.feed(caseFeeder)
		.exec(http("Solver")
			.get(host + """/?case=${case}"""))

	setUp(scn.inject(
		rampUsersPerSec(0.2) to(10) during(10 minutes)
	)).protocols(httpProtocol)
}