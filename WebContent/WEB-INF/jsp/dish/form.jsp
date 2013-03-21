<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/dishes" method="post">
  
	<c:if test="${not empty dish.id}">
		<input type="hidden" name="dish.id" value="${dish.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Period:<br />
	
		<input type="text" name="dish.period" value="${dish.period}"/>
	</div>
	
	<div class="field">
		Nature:<br />
		<select name="dish.nature.id">
		  <c:forEach var="nature" items="${natureList}">
		    <option value="${nature.id}" <c:if test = "${dish.nature.id == nature.id}">selected="true"</c:if>>
		      ${nature.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Menu:<br />
		<select name="dish.menu.id">
		  <c:forEach var="menu" items="${menuList}">
		    <option value="${menu.id}" <c:if test = "${dish.menu.id == menu.id}">selected="true"</c:if>>
		      ${menu.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/dishes">Back</a>
