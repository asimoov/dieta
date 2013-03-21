<head>
	<title>Dish [index]</title>
</head>
<body>
	<h1>Listing Dishes</h1>

	<table>
		<tr>
			<th>Period</th>
			<th>Nature</th>
			<th>Menu</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${dishList}" var="dish">
			<tr>
				<td>${dish.period}</td>
				<td>${dish.nature}</td>
				<td>${dish.menu}</td>
				<td><a href="${pageContext.request.contextPath}/dishes/${dish.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/dishes/${dish.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/dishes/${dish.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/dishes/new">New Dish</a> 
</body>