 {
	"id": "${ward.id}",
 	"description": "${ward.description}",
 	"interments": [
	 	<c:forEach items="${ward.interments}" var="interment" varStatus="count" >
	 	{
	 		"id": "${interment.id}",
	 		"input": "${interment.input}",
	 		"cid": "${interment.cid}",
			"bed": "${interment.bed}",
		 	"patient": {
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
				"diets": [
					<c:if test="${not empty interment.patient.lastDiet}">
					{
						"id": "${interment.patient.lastDiet.id}",
						"weight": "${interment.patient.lastDiet.weight}",
						"height": "${interment.patient.lastDiet.height}",
						"companion": "${interment.patient.lastDiet.companion}",
						"levelOfAssistance": "${interment.patient.lastDiet.levelOfAssistance}",
						"observation": "${interment.patient.lastDiet.observation}",
						"createdAt": "${interment.patient.lastDiet.createdAt}"
					}
					</c:if>
				]
			}
		}${count.last ? "" : ","}
		</c:forEach>
	]
}