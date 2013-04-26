 {
	"id": "${interment.id}",
	"input": "${interment.input}",
	"cid": "${interment.cid}",
	"bed": "${interment.bed}",
	"patient": {
		"id": "${interment.patient.id}",
		"handbook": "${interment.patient.handbook}",
		"name": "${interment.patient.name}",
		"sex": "${interment.patient.sex}",
		"email": "${interment.patient.email}",
		"phone": "${interment.patient.phone}",
		"bird": "${interment.patient.bird}",
		"address": "${interment.patient.address}",
		"complement": "${interment.patient.complement}",
		"uf": "${interment.patient.uf}",
		"cep": "${interment.patient.cep}",
		"diets":[
			<c:forEach items="${interment.patient.diets}" var="diet" varStatus="p" >
			{
				"id": "${diet.id}",
				"weight": "${diet.weight}",
				"height": "${diet.height}",
				"companion": "${diet.companion}",
				"levelOfAssistance": "${diet.levelOfAssistance}",
				"observation": "${diet.observation}",
				"createdAt": "${diet.createdAt}",
				"meals":[
					<c:forEach items="${diet.meals}" var="meal" varStatus="j" >
					{
						"id": "${meal.id}",
						"dish": {
							"id": "${meal.dish.id}",
							"period": "${meal.dish.period}",
							"nature": {
								"id": "${meal.dish.nature.id}",
								"description": "${meal.dish.nature.description}",
								"type": "${meal.dish.nature.type}"
							},
							"menu": {
								"id": "${meal.dish.menu.id}",
								"week": "${meal.dish.menu.week}"
							}
						},
						"variations": [
						<c:forEach items="${meal.variations}" var="variation" varStatus="n" >
						{
							"id": "${variation.id}",
							"quantity": "${variation.quantity}",
							"food": {
								"id": "${variation.food.id}",
								"description": "${variation.food.description}",
								"unit": "${variation.food.unit}",
								"type": "${variation.food.type}",
								"calories": "${variation.food.calories}",
								"protein": "${variation.food.protein}",
								"lipids": "${variation.food.lipids}",
								"carbohydrate": "${variation.food.carbohydrate}",
								"fibre": "${variation.food.fibre}",
								"calcium": "${variation.food.calcium}",
								"magnesium": "${variation.food.magnesium}",
								"manganese": "${variation.food.manganese}",
								"phosphorus": "${variation.food.phosphorus}",
								"iron": "${variation.food.iron}",
								"sodium": "${variation.food.sodium}",
								"additionOfSodium": "${variation.food.additionOfSodium}",
								"potassium": "${variation.food.potassium}",
								"copper": "${variation.food.copper}",
								"zinc": "${variation.food.zinc}",
								"selenium": "${variation.food.selenium}",
								"retinol": "${variation.food.retinol}",
								"a": "${variation.food.a}",
								"b1": "${variation.food.b1}",
								"b2": "${variation.food.b2}",
								"b3": "${variation.food.b3}",
								"equivalentB3": "${variation.food.equivalentB3}",
								"b6": "${variation.food.b6}",
								"b12": "${variation.food.b12}",
								"folate": "${variation.food.folate}",
								"d": "${variation.food.d}",
								"e": "${variation.food.e}",
								"c": "${variation.food.c}",
								"cholesterol": "${variation.food.cholesterol}",
								"satturedFattyAcid": "${variation.food.satturedFattyAcid}",
								"monounsaturatedFattyAcids": "${variation.food.monounsaturatedFattyAcids}",
								"polyunsaturatedFattyAcids": "${variation.food.polyunsaturatedFattyAcids}",
								"linoleic": "${variation.food.linoleic}",
								"linolenic": "${variation.food.linolenic}",
								"transFattyAcidTotal": "${variation.food.transFattyAcidTotal}",
								"sugar": "${variation.food.sugar}",
								"additionSugar": "${variation.food.additionSugar}"
							}
						} ${n.last ? "" : ","}
						</c:forEach>
						]
					} ${j.last ? "" : ","}
					</c:forEach>
				]
			} ${p.last ? "" : ","}
			</c:forEach>
		]
	}
}