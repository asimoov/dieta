[
<c:forEach items="${wardList}" var="ward" varStatus="count" >
 {
	"id": "${ward.id}",
	"description": "${ward.description}"
 }${count.last ? "" : ","}
</c:forEach>
]