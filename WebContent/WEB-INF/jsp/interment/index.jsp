<head>
	<title>Interment [index]</title>
</head>
<body>
	<h1>Listing Interments</h1>

	<table>
		<tr>
			<th>Input</th>
			<th>Bed</th>
			<th>Patient</th>
			<th>Ward</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${intermentList}" var="interment">
			<tr>
				<td>${interment.input}</td>
				<td>${interment.bed}</td>
				<td>${interment.patient}</td>
				<td>${interment.ward}</td>
				<td><a href="${pageContext.request.contextPath}/interments/${interment.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/interments/${interment.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/interments/${interment.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/interments/new">New Interment</a> 
</body>