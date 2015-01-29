<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="com.google.appengine.api.datastore.DatastoreServiceFactory" %>
<%@ page import="com.google.appengine.api.datastore.DatastoreService" %>
<%@ page import="com.google.appengine.api.datastore.Query" %>
<%@ page import="com.google.appengine.api.datastore.Entity" %>
<%@ page import="com.google.appengine.api.datastore.FetchOptions" %>
<%@ page import="com.google.appengine.api.datastore.Key" %>
<%@ page import="com.google.appengine.api.datastore.KeyFactory" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<html>
<head>
  <title>List of gophers</title>
</head>
<body>

  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
    {{range .Gophers}}
    <tr>
      <td>{{.Id}}</td>
      <td>{{.Name}}</td>
    </tr>
    {{end}}
  </table>
  
  <hr/>

  <form action="/save" method="post">
    New Gopher
    <div>Id<input type="text" name="id"></div>
    <div>Name<input type="text" name="name"></div>
    <div><input type="submit" value="Save"></div>
  </form>
          
</body>
</html>