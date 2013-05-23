<c:if test="${not empty errors}">
	<c:forEach items="${errors}" var="error">
		${error.category} - ${error.message}<br />
	</c:forEach>
</c:if>

<form action="${pageContext.request.contextPath}/foods" method="post">
  
	<c:if test="${not empty food.id}">
		<input type="hidden" name="food.id" value="${food.id}"/>
		<input type="hidden" name="food.version" value="${food.version}"/>
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
	
	<div class="field">
		calories:<br />
	
		<input type="text" name="food.calories" value="${food.calories}"/>
	</div>
	
	<div class="field">
		protein:<br />
	
		<input type="text" name="food.protein" value="${food.protein}"/>
	</div>
	
	<div class="field">
		lipids:<br />
	
		<input type="text" name="food.lipids" value="${food.lipids}"/>
	</div>
	
	<div class="field">
		carbohydrate:<br />
	
		<input type="text" name="food.carbohydrate" value="${food.carbohydrate}"/>
	</div>
	
	<div class="field">
		fibre:<br />
	
		<input type="text" name="food.fibre" value="${food.fibre}"/>
	</div>
	
	<div class="field">
		iron:<br />
	
		<input type="text" name="food.iron" value="${food.iron}"/>
	</div>
	
	<div class="field">
		calcium:<br />
	
		<input type="text" name="food.calcium" value="${food.calcium}"/>
	</div>
	
	<div class="field">
		magnesium:<br />
	
		<input type="text" name="food.magnesium" value="${food.magnesium}"/>
	</div>
	
	<div class="field">
		manganese:<br />
	
		<input type="text" name="food.manganese" value="${food.manganese}"/>
	</div>
	
	<div class="field">
		phosphorus:<br />
	
		<input type="text" name="food.phosphorus" value="${food.phosphorus}"/>
	</div>
	
	<div class="field">
		sodium:<br />
	
		<input type="text" name="food.sodium" value="${food.sodium}"/>
	</div>
	
	<div class="field">
		additionOfSodium:<br />
	
		<input type="text" name="food.additionOfSodium" value="${food.additionOfSodium}"/>
	</div>
	
	<div class="field">
		potassium:<br />
	
		<input type="text" name="food.potassium" value="${food.potassium}"/>
	</div>
	
	<div class="field">
		copper:<br />
	
		<input type="text" name="food.copper" value="${food.copper}"/>
	</div>
	
	<div class="field">
		zinc:<br />
	
		<input type="text" name="food.zinc" value="${food.zinc}"/>
	</div>
	
	<div class="field">
		selenium:<br />
	
		<input type="text" name="food.selenium" value="${food.selenium}"/>
	</div>
	
	<div class="field">
		retinol:<br />
	
		<input type="text" name="food.retinol" value="${food.retinol}"/>
	</div>
	
	<div class="field">
		a:<br />
	
		<input type="text" name="food.a" value="${food.a}"/>
	</div>
	
	<div class="field">
		b1:<br />
	
		<input type="text" name="food.b1" value="${food.b1}"/>
	</div>
	
	<div class="field">
		b2:<br />
	
		<input type="text" name="food.b2" value="${food.b2}"/>
	</div>
	
	<div class="field">
		b3:<br />
	
		<input type="text" name="food.b3" value="${food.b3}"/>
	</div>
	
	
	<div class="field">
		equivalentB3:<br />
	
		<input type="text" name="food.equivalentB3" value="${food.equivalentB3}"/>
	</div>
	
	<div class="field">
		b6:<br />
	
		<input type="text" name="food.b6" value="${food.b6}"/>
	</div>
	
	<div class="field">
		b12:<br />
	
		<input type="text" name="food.b12" value="${food.b12}"/>
	</div>
	
	
	<div class="field">
		folate:<br />
	
		<input type="text" name="food.folate" value="${food.folate}"/>
	</div>
	
	<div class="field">
		d:<br />
	
		<input type="text" name="food.d" value="${food.d}"/>
	</div>
	
	<div class="field">
		e:<br />
	
		<input type="text" name="food.e" value="${food.e}"/>
	</div>

	<div class="field">
		c:<br />
	
		<input type="text" name="food.c" value="${food.c}"/>
	</div>
	
	<div class="field">
		cholesterol:<br />
	
		<input type="text" name="food.cholesterol" value="${food.cholesterol}"/>
	</div>
	
	<div class="field">
		e:<br />
	
		<input type="text" name="food.e" value="${food.e}"/>
	</div>
	
	<div class="field">
		satturedFattyAcid:<br />
	
		<input type="text" name="food.satturedFattyAcid" value="${food.satturedFattyAcid}"/>
	</div>
	
	<div class="field">
		monounsaturatedFattyAcids:<br />
	
		<input type="text" name="food.monounsaturatedFattyAcids" value="${food.monounsaturatedFattyAcids}"/>
	</div>
	
	<div class="field">
		linoleic:<br />
	
		<input type="text" name="food.linoleic" value="${food.linoleic}"/>
	</div>
	
	<div class="field">
		linolenic:<br />
	
		<input type="text" name="food.linolenic" value="${food.linolenic}"/>
	</div>
	
	<div class="field">
		transFattyAcidTotal:<br />
	
		<input type="text" name="food.transFattyAcidTotal" value="${food.transFattyAcidTotal}"/>
	</div>
	
	<div class="field">
		monounsaturatedFattyAcids:<br />
	
		<input type="text" name="food.monounsaturatedFattyAcids" value="${food.monounsaturatedFattyAcids}"/>
	</div>
	
	<div class="field">
		sugar:<br />
	
		<input type="text" name="food.sugar" value="${food.sugar}"/>
	</div>
	
	<div class="field">
		additionSugar:<br />
	
		<input type="text" name="food.additionSugar" value="${food.additionSugar}"/>
	</div>
  <div class="actions">
	  <button type="submit">send</button>
	</div>
</form>

<a href="${pageContext.request.contextPath}/foods">Back</a>
