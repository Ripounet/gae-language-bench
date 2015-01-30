
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

import util.Random

class BusinessAppWriteGo extends Simulation {

	val httpProtocol = http
		.baseURL("http://go.bench-business-app.appspot.com")
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.connection("keep-alive")
		.contentTypeHeader("application/x-www-form-urlencoded")
		.userAgentHeader("Valentin load test with Gatling")

	val scn = scenario("BusinessAppWrite")
		.exec(http("request_3")
			.post("/save")
			.formParam("id", _ => 100 + Random.nextInt(900) )
			.formParam("name", _ => "RandomName" + (100 + Random.nextInt(900))))

	setUp(scn.inject(
		rampUsersPerSec(0.2) to(1) during(10 seconds)
//		rampUsersPerSec(0.2) to(1) during(10 minutes)
		)).protocols(httpProtocol)
}