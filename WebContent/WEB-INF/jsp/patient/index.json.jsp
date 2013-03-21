[
<c:forEach items="${patientList}" var="patient" varStatus="count" >
 { "handbook": "${patient.handbook}",
   "name": "${patient.name}",
   "sex": "${patient.sex}",
   "email": "${patient.email}",
   "phone": "${patient.phone}",
   "bird": "${patient.bird}",
   "address": "${patient.address}",
   "complement": "${patient.complement}",
   "uf": "${patient.uf}",
   "cep": "${patient.cep}"
 }${count.last ? "" : ","}
</c:forEach>
]