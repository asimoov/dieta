 {
	"id": "${ward.id}",
 	"description": "${ward.description}",
 	"interments": [
	 	<c:forEach items="${ward.interments}" var="interment" varStatus="count" >
	 	{
	 		"id": "${interment.id}",
	 		"input": "${interment.input}",
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
				"cep": "${interment.patient.cep}"
			}
		}${count.last ? "" : ","}
		</c:forEach>
	]
}