<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/meals" method="post">
  
	<c:if test="${not empty meal.id}">
		<input type="hidden" name="meal.id" value="${meal.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Dish:<br />
		<select name="meal.dish.id">
		  <c:forEach var="dish" items="${dishList}">
		    <option value="${dish.id}" <c:if test = "${meal.dish.id == dish.id}">selected="true"</c:if>>
		      ${dish.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Diet:<br />
		<select name="meal.diet.id">
		  <c:forEach var="diet" items="${dietList}">
		    <option value="${diet.id}" <c:if test = "${meal.diet.id == diet.id}">selected="true"</c:if>>
		      ${diet.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Status:<br />
	
		<input type="text" name="meal.status" value="${meal.status}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/meals">Back</a>
