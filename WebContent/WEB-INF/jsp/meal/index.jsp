<head>
	<title>Meal [index]</title>
</head>
<body>
	<h1>Listing Meals</h1>

	<table>
		<tr>
			<th>Dish</th>
			<th>Diet</th>
			<th>Status</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${mealList}" var="meal">
			<tr>
				<td>${meal.dish}</td>
				<td>${meal.diet}</td>
				<td>${meal.status}</td>
				<td><a href="${pageContext.request.contextPath}/meals/${meal.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/meals/${meal.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/meals/${meal.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/meals/new">New Meal</a> 
</body>