
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

import util.Random

class FortuneGo extends Simulation {

	val httpProtocol = http
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.connection("keep-alive")
		.userAgentHeader("Valentin load test with Gatling")

	val scn = scenario("Fortune")
		.exec(http("Homepage")
			.get("/")
			.queryParam("x", _ => 100 + Random.nextInt(900)))

	setUp(scn.inject(
		rampUsersPerSec(0.2) to(10) during(10 minutes)
		)).protocols(httpProtocol
			.baseURL("http://go.bench-fortune.appspot.com"))
		
}
