<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/wards" method="post">
  
	<c:if test="${not empty ward.id}">
		<input type="hidden" name="ward.id" value="${ward.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Description:<br />
	
		<input type="text" name="ward.description" value="${ward.description}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/wards">Back</a>
