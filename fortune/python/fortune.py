import webapp2
import random

class Fortune(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        N=random.randint(2,11)
        self.response.write('(Python) Tonight you will have ' + str(N) + ' beers')

application = webapp2.WSGIApplication([
    ('/', Fortune),
], debug=True)
