<head>
	<title>Patient [index]</title>
</head>
<body>
	<h1>Listing Patients</h1>

	<table>
		<tr>
			<th>Handbook</th>
			<th>Name</th>
			<th>Sex</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Bird</th>
			<th>Address</th>
			<th>Complement</th>
			<th>Uf</th>
			<th>Cep</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>

		<c:forEach items="${patientList}" var="patient">
			<tr>
				<td>${patient.handbook}</td>
				<td>${patient.name}</td>
				<td>${patient.sex}</td>
				<td>${patient.email}</td>
				<td>${patient.phone}</td>
				<td>${patient.bird}</td>
				<td>${patient.address}</td>
				<td>${patient.complement}</td>
				<td>${patient.uf}</td>
				<td>${patient.cep}</td>
				<td><a href="${pageContext.request.contextPath}/patients/${patient.id}">show</a></td>
				<td><a href="${pageContext.request.contextPath}/patients/${patient.id}/edit">edit</a></td>
				<td>
					<form action="${pageContext.request.contextPath}/patients/${patient.id}" method="post">
						<input type="hidden" name="_method" value="delete"/>
						<button type="submit" onclick="return confirm('Are you sure?')">destroy</button>
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>

	<br />
	<a href="${pageContext.request.contextPath}/patients/new">New Patient</a> 
</body>