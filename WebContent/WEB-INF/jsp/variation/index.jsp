<head>
	<title>Variation [index]</title>
</head>
<body>
	<h1>Listing Variations</h1>

	<table>
		<tr>
			<th>Food</th>
			<th>Meal</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${variationList}" var="variation">
			<tr>
				<td>${variation.food}</td>
				<td>${variation.meal}</td>
				<td><a href="${pageContext.request.contextPath}/variations/${variation.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/variations/${variation.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/variations/${variation.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/variations/new">New Variation</a> 
</body>