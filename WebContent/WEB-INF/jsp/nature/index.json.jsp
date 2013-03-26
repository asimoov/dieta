[
<c:forEach items="${natureList}" var="nature" varStatus="count">
	{ 
		"id": "${nature.id}",
		"description": "${nature.description}"
	}${count.last ? "" : ","}
</c:forEach>
]
