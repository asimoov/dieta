<head>
	<title>Diet [index]</title>
</head>
<body>
	<h1>Listing Diets</h1>

	<table>
		<tr>
			<th>Patient</th>
			<th>Status</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${dietList}" var="diet">
			<tr>
				<td>${diet.patient}</td>
				<td>${diet.status}</td>
				<td><a href="${pageContext.request.contextPath}/diets/${diet.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/diets/${diet.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/diets/${diet.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/diets/new">New Diet</a> 
</body>