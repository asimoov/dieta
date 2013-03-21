<head>
	<title>Variation [show]</title>
</head>
<body>
	<p>
		<b>Food:</b>
		${variation.food}
	</p>
	<p>
		<b>Meal:</b>
		${variation.meal}
	</p>

	<a href="${pageContext.request.contextPath}/variations/${variation.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/variations">Back</a>
</body>