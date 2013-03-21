<head>
	<title>Menu [index]</title>
</head>
<body>
	<h1>Listing Menus</h1>

	<table>
		<tr>
			<th>Week</th>
			<th>Status</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${menuList}" var="menu">
			<tr>
				<td>${menu.week}</td>
				<td>${menu.status}</td>
				<td><a href="${pageContext.request.contextPath}/menus/${menu.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/menus/${menu.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/menus/${menu.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/menus/new">New Menu</a> 
</body>