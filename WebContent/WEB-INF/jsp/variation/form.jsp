<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/variations" method="post">
  
	<c:if test="${not empty variation.id}">
		<input type="hidden" name="variation.id" value="${variation.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Food:<br />
		<select name="variation.food.id">
		  <c:forEach var="food" items="${foodList}">
		    <option value="${food.id}" <c:if test = "${variation.food.id == food.id}">selected="true"</c:if>>
		      ${food.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Meal:<br />
		<select name="variation.meal.id">
		  <c:forEach var="meal" items="${mealList}">
		    <option value="${meal.id}" <c:if test = "${variation.meal.id == meal.id}">selected="true"</c:if>>
		      ${meal.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/variations">Back</a>
