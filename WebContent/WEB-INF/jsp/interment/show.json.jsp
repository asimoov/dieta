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
				"levelOfAssistance": "${diet.levelOfAssistance}",
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
							"food": {
								"id": "${variation.food.id}",
								"description": "${variation.food.description}"
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