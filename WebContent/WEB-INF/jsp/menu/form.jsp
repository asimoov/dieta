<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/menus" method="post">
  
	<c:if test="${not empty menu.id}">
		<input type="hidden" name="menu.id" value="${menu.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Week:<br />
	
		<input type="text" name="menu.week" value="${menu.week}"/>
	</div>
	
	<div class="field">
		Status:<br />
	
		<input type="text" name="menu.status" value="${menu.status}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/menus">Back</a>
