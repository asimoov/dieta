<head>
	<title>Menu [show]</title>
</head>
<body>
	<p>
		<b>Week:</b>
		${menu.week}
	</p>
	<p>
		<b>Status:</b>
		${menu.status}
	</p>

	<a href="${pageContext.request.contextPath}/menus/${menu.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/menus">Back</a>
</body>