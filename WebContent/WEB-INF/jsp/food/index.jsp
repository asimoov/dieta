<head>
	<title>Food [index]</title>
</head>
<body>
	<h1>Listing Foods</h1>

	<table>
		<tr>
			<th>Description</th>
			<th>Unit</th>
			<th>Type</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${foodList}" var="food">
			<tr>
				<td>${food.description}</td>
				<td>${food.unit}</td>
				<td>${food.type}</td>
				<td><a href="${pageContext.request.contextPath}/foods/${food.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/foods/${food.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/foods/${food.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/foods/new">New Food</a> 
</body>