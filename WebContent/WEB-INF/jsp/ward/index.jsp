<head>
	<title>Ward [index]</title>
</head>
<body>
	<h1>Listing Wards</h1>

	<table>
		<tr>
			<th>Description</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${wardList}" var="ward">
			<tr>
				<td>${ward.description}</td>
				<td><a href="${pageContext.request.contextPath}/wards/${ward.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/wards/${ward.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/wards/${ward.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/wards/new">New Ward</a> 
</body>