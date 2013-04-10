{
	"id": "${auth.name}",
	"authorities": [
		<c:forEach items="${auth.authorities}" var="authority" varStatus="count">
			"${authority.authority}"${count.last ? "" : ","}
		</c:forEach>
	]
}