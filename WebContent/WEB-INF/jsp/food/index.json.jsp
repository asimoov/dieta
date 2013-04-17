[
<c:forEach items="${foodList}" var="food" varStatus="count">
	{ 
		"id": "${food.id}",
		"description": "${food.description}",
		"unit": "${food.unit}",
		"type": "${food.type}"
	}${count.last ? "" : ","}
</c:forEach>
]
