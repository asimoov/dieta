<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/interments" method="post">
  
	<c:if test="${not empty interment.id}">
		<input type="hidden" name="interment.id" value="${interment.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Input:<br />
	
		<input type="text" name="interment.input" value="${interment.input}"/>
	</div>
	
	<div class="field">
		Patient:<br />
		<select name="interment.patient.id">
		  <c:forEach var="patient" items="${patientList}">
		    <option value="${patient.id}" <c:if test = "${interment.patient.id == patient.id}">selected="true"</c:if>>
		      ${patient.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Ward:<br />
		
		<input type="text" name="interment.ward" value="${interment.ward}"/>
		<select name="interment.ward.id">
		  <c:forEach var="bed" items="${wardList}">
		    <option value="${ward.id}" <c:if test = "${interment.ward.id == ward.id}">selected="true"</c:if>>
		      ${ward.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
	<div class="field">
		Bed:<br />
		
		<input type="text" name="interment.bed" value="${interment.bed}"/>
		<select name="interment.bed.id">
		  <c:forEach var="bed" items="${bedList}">
		    <option value="${bed.id}" <c:if test = "${interment.bed.id == bed.id}">selected="true"</c:if>>
		      ${bed.id}
			</option>
		  </c:forEach>
		</select>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/interments">Back</a>
