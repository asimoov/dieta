define([
  'jquery',
  'underscore',
  'backbone',
  'models/patient'
], function($, _, Backbone, Patient) {
  return Backbone.Model.extend({
	  urlRoot: "interments",
	  isNulo: function() {
		  var input = new Date(this.get('input'));
		  var patient = new Patient(this.get('patient'));
		  var diets = patient.get('diets');
		  
		  if (diets === undefined || diets.length === 0) {
			  return true;
		  }
		  
		  var createdAt = new Date(diets[diets.length-1].createdAt);
		  if(input > createdAt) {
			  return true;
		  }
		  
		  return false;
	  }
  });
});
