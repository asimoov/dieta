[
<c:forEach items="${natureList}" var="nature" varStatus="count">
	{ 
		"id": "${nature.id}",
		"description": "${nature.description}",
		"type": "${nature.type}"
	}${count.last ? "" : ","}
</c:forEach>
]
