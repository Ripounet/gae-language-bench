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
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

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
	<c:forEach var="gopher" varStatus="status" items="${gophers}">
    <tr>
      <td>${gopher.id}</td>
      <td><a href="/detail?id=${gopher.id}">${gopher.name}</a></td>
    </tr>
	</c:forEach>
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