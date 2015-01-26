#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import cgi
import datetime
import webapp2

from google.appengine.ext import ndb

class Gopher(ndb.Model):
  Name = ndb.TextProperty()

class List(webapp2.RequestHandler):
  def get(self):
    self.response.out.write('<html><body>')

    gophers = ndb.gql('SELECT * '
                        'FROM Gopher ')
#                        'ORDER BY Name DESC LIMIT 20')
	
    self.response.out.write('<table> <tr><th>Id</th><th>Name</th></tr> ')
    for gopher in gophers:
      self.response.out.write('<tr>')
      self.response.out.write('<td>%s</td>' % gopher.key.id())
      self.response.out.write('<td>%s</td>' % gopher.Name)
      self.response.out.write('</tr> \n')
    self.response.out.write('</table> ')

    self.response.out.write("""
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
], debug=True)
