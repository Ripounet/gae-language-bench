import webapp2
import random

class Fortune(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        N=random.randint(2,11)
        self.response.write('(Python)\nTonight you will get ' + str(N) + ' beers.')

application = webapp2.WSGIApplication([
    ('/', Fortune),
], debug=True)
