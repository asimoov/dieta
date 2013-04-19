define([
  'jquery',
  'underscore',
  'backbone',
  'models/patient',
  'models/interment'
], function($, _, Backbone, Patient, Interment) {
  return Backbone.Collection.extend({
  	url: 'interments?_format=json',
  	model: Interment,
  	totals: function() {
  		return this.countBy(function(interment) {
  			var patient = new Patient(interment.get("patient"));
  			var diets = interment.get("patient").diets;
  			
  			if(diets !== undefined && diets.length > 0) {
  				if(patient.isNeedAssistance()) {
  					return "Falta Assistance";
  				} else {
  					return "Ok";
  				}
  			}
  			
  			return "Nulo";
  		});
  	}
  });
});
