define([
  'jquery',
  'underscore',
  'backbone',
  'models/patient',
  'models/ward'
], function($, _, Backbone, Patient, Ward) {
	"use strict";
	return Backbone.Model.extend({
		urlRoot: "interments",
		initialize: function() {
			this.set({"patient": new Patient(this.get('patient'))});
			this.set({"ward": new Ward(this.get('ward'))});
		},
		patient: function() {
			return this.get('patient');
		},
		ward: function() {
			return this.get('ward');
		},
		isNulo: function() {
			var input = new Date(this.get('input'));
			var patient = this.get('patient');
			var diets = patient.get('diets');
			
			if (diets === undefined || diets.length === 0) {
				return true;
			}
			  
			var createdAt = new Date(diets.first().get('createdAt'));
			if(input > createdAt) {
				return true;
			}
					  
			return false;
		}
	});
});
