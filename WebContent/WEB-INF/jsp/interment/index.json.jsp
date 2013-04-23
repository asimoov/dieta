[
<c:forEach items="${intermentList}" var="interment" varStatus="count" >
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
				"levelOfAssistance": "${interment.patient.lastDiet.levelOfAssistance}",
				"createdAt": "${interment.patient.lastDiet.createdAt}"
			}
			</c:if>
		]
	},
	"ward": {
			"description": "${interment.ward.description}"
	}
 }${count.last ? "" : ","}
</c:forEach>
]