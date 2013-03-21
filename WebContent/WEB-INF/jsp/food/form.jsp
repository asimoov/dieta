<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/foods" method="post">
  
	<c:if test="${not empty food.id}">
		<input type="hidden" name="food.id" value="${food.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Description:<br />
	
		<input type="text" name="food.description" value="${food.description}"/>
	</div>
	
	<div class="field">
		Unit:<br />
	
		<input type="text" name="food.unit" value="${food.unit}"/>
	</div>
	
	<div class="field">
		Type:<br />
	
		<input type="text" name="food.type" value="${food.type}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/foods">Back</a>
