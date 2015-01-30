#!/usr/bin/env python

import cgi
import datetime
import webapp2

from google.appengine.ext import ndb
from google.appengine.api import memcache

class Gopher(ndb.Model):
  Name = ndb.StringProperty()

class List(webapp2.RequestHandler):
  def get(self):
    self.response.out.write('<html><body>')

    gophers = memcache.get('gopher-list-py')
    if gophers is None:
      gophers = ndb.gql('SELECT * '
                        'FROM Gopher '
                        'ORDER BY Name DESC LIMIT 20')
      memcache.add('gopher-list-py', gophers)
	
    self.response.out.write('<table> <tr><th>Id</th><th>Name</th></tr> ')
    for gopher in gophers:
      self.response.out.write('<tr>')
      self.response.out.write('<td>%s</td>' % gopher.key.id())
      self.response.out.write('<td>%s</td>' % gopher.Name)
      self.response.out.write('</tr> \n')
    self.response.out.write('</table> ')

    self.response.out.write("""
  		  <hr/>
  
          <form action="/save" method="post">
            New Gopher
            <div>Id<input type="text" name="id"></div>
            <div>Name<input type="text" name="name"></div>
            <div><input type="submit" value="Save"></div>
          </form>
        </body>
      </html>""")


class Detail(webapp2.RequestHandler):
  def get(self):
    id=int(self.request.get('id'))
    gopher_key = ndb.Key('Gopher', id)
    gopher=Gopher.get_by_id(id)
	
    self.response.out.write("""
		<html>
		<head>
	""")
    self.response.out.write("""
		  <title>Detail of gopher %s</title>
	""" % gopher.key.id())
    self.response.out.write("""
		</head>
		<body>
		
		  <table>
		    <tr>
		      <th>Id</th>
		      <th>Name</th>
		    </tr>
		    <tr>
	""")
    self.response.out.write("""
		      <td>%s</td>
	""" % gopher.key.id())
    self.response.out.write("""
		      <td>%s</td>
	""" % gopher.Name)
    self.response.out.write("""
		    </tr>
		  </table>
		  
		  <hr/>
		  
		  <a href="/">Return to list</a>
		
		</body>
		</html>
      """)


class Save(webapp2.RequestHandler):
  def post(self):
    gopher = Gopher(id=int(self.request.get('id')))
    gopher.Name = self.request.get('name')
    gopher.put()
    self.redirect('/detail?id=' + str(gopher.key.id()))
    #self.redirect('/')


app = webapp2.WSGIApplication([
  ('/', List),
  ('/detail', Detail),
  ('/save', Save)
], debug=False)
