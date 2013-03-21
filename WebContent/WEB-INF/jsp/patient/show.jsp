<head>
	<title>Patient [show]</title>
</head>
<body>
	<p>
		<b>Handbook:</b>
		${patient.handbook}
	</p>
	<p>
		<b>Name:</b>
		${patient.name}
	</p>
	<p>
		<b>Sex:</b>
		${patient.sex}
	</p>
	<p>
		<b>Email:</b>
		${patient.email}
	</p>
	<p>
		<b>Phone:</b>
		${patient.phone}
	</p>
	<p>
		<b>Bird:</b>
		${patient.bird}
	</p>
	<p>
		<b>Address:</b>
		${patient.address}
	</p>
	<p>
		<b>Complement:</b>
		${patient.complement}
	</p>
	<p>
		<b>Uf:</b>
		${patient.uf}
	</p>
	<p>
		<b>Cep:</b>
		${patient.cep}
	</p>

	<a href="${pageContext.request.contextPath}/patients/${patient.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/patients">Back</a>
</body>