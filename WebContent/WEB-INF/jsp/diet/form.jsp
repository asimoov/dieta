<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/diets" method="post">
  
	<c:if test="${not empty diet.id}">
		<input type="hidden" name="diet.id" value="${diet.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Patient:<br />
		<select name="diet.patient.id">
		  <c:forEach var="patient" items="${patientList}">
		    <option value="${patient.id}" <c:if test = "${diet.patient.id == patient.id}">selected="true"</c:if>>
		      ${patient.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Status:<br />
	
		<input type="text" name="diet.status" value="${diet.status}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/diets">Back</a>
