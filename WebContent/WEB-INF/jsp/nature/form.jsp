<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/natures" method="post">
  
	<c:if test="${not empty nature.id}">
		<input type="hidden" name="nature.id" value="${nature.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Description:<br />
	
		<input type="text" name="nature.description" value="${nature.description}"/>
	</div>
	
	<div class="field">
		Tipo:<br />
	
		<input type="text" name="nature.tipo" value="${nature.tipo}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/natures">Back</a>
