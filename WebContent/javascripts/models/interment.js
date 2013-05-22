define([
  'backbone',
  'models/patient',
  'models/ward'
], function(Backbone, Patient, Ward) {
	"use strict";
	return Backbone.Model.extend({
		urlRoot: "interments",
		patient: function() {
			return new Patient(this.get('patient'));
		},
		ward: function() {
			return new Ward(this.get('ward'));
		},
		isCurrent: function() {
			var input = new Date(this.get('input'));
			var diet = this.patient().diets().last();
			
			if (diet === undefined) {
				return true;
			}

			var createdAt = diet.createdAt();
			if(input > createdAt) {
				return true;
			}

			return false;
		}
	});
});
