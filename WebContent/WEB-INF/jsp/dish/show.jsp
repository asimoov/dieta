<head>
	<title>Dish [show]</title>
</head>
<body>
	<p>
		<b>Period:</b>
		${dish.period}
	</p>
	<p>
		<b>Nature:</b>
		${dish.nature}
	</p>
	<p>
		<b>Menu:</b>
		${dish.menu}
	</p>

	<a href="${pageContext.request.contextPath}/dishes/${dish.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/dishes">Back</a>
</body>