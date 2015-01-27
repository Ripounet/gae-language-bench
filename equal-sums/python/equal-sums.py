import webapp2
import random

# Solution for problem "Equal Sums" from Google Code Jam 2012
# 
# See https://code.google.com/codejam/contest/1836486/dashboard#s=p2
 
Y=6

def solve(c):
	N = len(c)
	memo = {}
	while 1:
		for i in range(Y):
			j = random.randint(i+1, N-1)
			c[i], c[j] = c[j], c[i]
		sol = c[0:Y]
		s = sum(sol)
		if s in memo:
			other = memo[s]
			sol.sort()
			other.sort()
			if other!=sol:
				prettyOther = " + ".join([str(n) for n in other])
				prettySol = " + ".join([str(n) for n in sol])
				return prettyOther + " = " + str(sum(other)) + "\n" + prettySol + " = " + str(sum(sol))
		memo[s] = sol
	return ":("
	
class EqualSums(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        #inputCase = [120, 266, 858, 1243, 1657, 1771, 2328, 2490, 2665, 2894, 3117, 4210, 4454, 4943, 5690, 6170, 7048, 7125, 9512, 9600]
        caseParam = self.request.get('case')
        inputCaseStr = caseParam.split(",")
        inputCase = [int(s) for s in inputCaseStr]
        msg = solve(inputCase)
        self.response.write('(Python) \n' + msg)

application = webapp2.WSGIApplication([
    ('/', EqualSums),
], debug=False)
