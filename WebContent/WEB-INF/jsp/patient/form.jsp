<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/patients" method="post">
  
	<c:if test="${not empty patient.id}">
		<input type="hidden" name="patient.id" value="${patient.id}"/>
		<input type="hidden" name="_method" value="put"/>
	</c:if>

	<div class="field">
		Handbook:<br />
	
		<input type="text" name="patient.handbook" value="${patient.handbook}"/>
	</div>
	
	<div class="field">
		Name:<br />
	
		<input type="text" name="patient.name" value="${patient.name}"/>
	</div>
	
	<div class="field">
		Sex:<br />
	
		<input type="text" name="patient.sex" value="${patient.sex}"/>
	</div>
	
	<div class="field">
		Email:<br />
	
		<input type="text" name="patient.email" value="${patient.email}"/>
	</div>
	
	<div class="field">
		Phone:<br />
	
		<input type="text" name="patient.phone" value="${patient.phone}"/>
	</div>
	
	<div class="field">
		Bird:<br />
	
		<input type="text" name="patient.bird" value="${patient.bird}"/>
	</div>
	
	<div class="field">
		Address:<br />
	
		<input type="text" name="patient.address" value="${patient.address}"/>
	</div>
	
	<div class="field">
		Complement:<br />
	
		<input type="text" name="patient.complement" value="${patient.complement}"/>
	</div>
	
	<div class="field">
		Uf:<br />
	
		<input type="text" name="patient.uf" value="${patient.uf}"/>
	</div>
	
	<div class="field">
		Cep:<br />
	
		<input type="text" name="patient.cep" value="${patient.cep}"/>
	</div>
	
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/patients">Back</a>
