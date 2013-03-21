 {
	"id": "${interment.id}",
	"input": "${interment.input}",
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
						}
					} ${j.last ? "" : ","}
					</c:forEach>
				]
			} ${p.last ? "" : ","}
			</c:forEach>
		]
	}
}