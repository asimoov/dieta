<head>
	<title>Diet [show]</title>
</head>
<body>
	<p>
		<b>Patient:</b>
		${diet.patient}
	</p>
	<p>
		<b>Status:</b>
		${diet.status}
	</p>

	<a href="${pageContext.request.contextPath}/diets/${diet.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/diets">Back</a>
</body>