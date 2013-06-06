define([
  'backbone',
  'collections/meals'
], function(Backbone, Meals) {
	"use strict";
	return Backbone.Model.extend({
		urlRoot: "diets",
		defaults: {
			createdAt: new Date(),
			weight: 0,
			height: 0
		},
		meals: function() {
			return new Meals(this.get('meals'));
		},
		createdAt: function() {
			return new Date(this.get('createdAt'));
		},
		patient: function() {
			var Patient = require('models/patient');
			return new Patient(this.get('patient'));
		},
		levelOfAssistance: function(){
			return this.get('levelOfAssistance');
		},
		weight:function() {
			return parseFloat(this.get('weight'));
		},
		height: function() {
			return parseFloat(this.get('height'));
		},
		companion: function(){
			return Boolean(this.get('companion'));
		},
		observation: function() {
			return this.get('observation');
		}
	});
});
