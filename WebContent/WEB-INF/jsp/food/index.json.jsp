[
<c:forEach items="${foodList}" var="food" varStatus="count">
	{ 
		"id": "${food.id}",
		"description": "${food.description}"
	}${count.last ? "" : ","}
</c:forEach>
]
