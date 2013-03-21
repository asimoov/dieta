<head>
	<title>Interment [show]</title>
</head>
<body>
	<p>
		<b>Input:</b>
		${interment.input}
	</p>
	<p>
		<b>Bed:</b>
		${interment.bed}
	</p>
	
	<p>
		<b>Patient:</b>
		${interment.patient}
	</p>
	
	<p>
		<b>Ward:</b>
		${interment.ward}
	</p>

	<a href="${pageContext.request.contextPath}/interments/${interment.id}/edit">Edit</a>
	<a href="${pageContext.request.contextPath}/interments">Back</a>
</body>