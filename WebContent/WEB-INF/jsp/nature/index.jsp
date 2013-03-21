<head>
	<title>Nature [index]</title>
</head>
<body>
	<h1>Listing Natures</h1>

	<table>
		<tr>
			<th>Description</th>
			<th>Tipo</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${natureList}" var="nature">
			<tr>
				<td>${nature.description}</td>
				<td>${nature.tipo}</td>
				<td><a href="${pageContext.request.contextPath}/natures/${nature.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/natures/${nature.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/natures/${nature.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/natures/new">New Nature</a> 
</body>