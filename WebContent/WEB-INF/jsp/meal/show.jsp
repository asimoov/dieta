<head>
	<title>Meal [show]</title>
</head>
<body>
	<p>
		<b>Dish:</b>
		${meal.dish}
	</p>
	<p>
		<b>Diet:</b>
		${meal.diet}
	</p>
	<p>
		<b>Status:</b>
		${meal.status}
	</p>

	<a href="${pageContext.request.contextPath}/meals/${meal.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/meals">Back</a>
</body>