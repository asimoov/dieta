<head>
	<title>Food [show]</title>
</head>
<body>
	<p>
		<b>Description:</b>
		${food.description}
	</p>
	<p>
		<b>Unit:</b>
		${food.unit}
	</p>
	<p>
		<b>Type:</b>
		${food.type}
	</p>

	<a href="${pageContext.request.contextPath}/foods/${food.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/foods">Back</a>
</body>