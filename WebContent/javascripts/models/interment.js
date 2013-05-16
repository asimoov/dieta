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
		patient: function() {
			return new Patient(this.get('patient'));
		},
		ward: function() {
			return new Ward(this.get('ward'));
		},
		isNulo: function() {
			var input = new Date(this.get('input'));
			var patient = this.patient();
			var diets = patient.diets();
			
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
