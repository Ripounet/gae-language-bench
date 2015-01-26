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
from google.appengine.api import users

guestbook_key = ndb.Key('Guestbook', 'default_guestbook')
gopher_key = ndb.Key('Gopher', 'Gopher')

class Greeting(ndb.Model):
  author = ndb.UserProperty()
  content = ndb.TextProperty()
  date = ndb.DateTimeProperty(auto_now_add=True)

class Gopher(ndb.Model):
  Id = ndb.IntegerProperty()
  Name = ndb.TextProperty()

class List(webapp2.RequestHandler):
  def get(self):
    self.response.out.write('<html><body>')

    gophers = ndb.gql('SELECT * '
                        'FROM Gopher '
                        'ORDER BY Name DESC LIMIT 20')

	
    self.response.out.write('<table> <tr><th>Id</th><th>Name</th></tr> ')

    for gopher in gophers:
      self.response.out.write('<tr><td>%s</td><td>%s</td></tr> \n' % gopher.Id() % gopher.Name())

    self.response.out.write('</table> ')

    self.response.out.write("""
          <form action="/save" method="post">
            <div>Id<input type="text" name="id"></div>
            <div>Name<input type="text" name="name"></div>
            <div><input type="submit" value="Save"></div>
          </form>
        </body>
      </html>""")


class Detail(webapp2.RequestHandler):
  def get(self):
    self.request.get('id')
    greeting = Greeting(parent=guestbook_key)

    if users.get_current_user():
      greeting.author = users.get_current_user()

    greeting.content = self.request.get('content')
    greeting.put()
    self.redirect('/')
    
    
class Save(webapp2.RequestHandler):
  def post(self):
    gopher = Gopher()

    gopher.Id = self.request.get('id')
    gopher.Name = self.request.get('name')
    gopher.put()
    #self.redirect('/detail?id=' + gopher.Id)
    self.redirect('/')


app = webapp2.WSGIApplication([
  ('/', List),
  ('/detail', Detail),
  ('/save', Save)
], debug=True)
