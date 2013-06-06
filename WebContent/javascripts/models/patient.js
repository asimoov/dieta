define([
  'jquery',
  'underscore',
  'backbone',
  'models/diet',
  'models/level_of_assistance',
  'collections/diets',
], function($, _, Backbone, Diet, LevelOfAssistance, Diets) {
	"use strict";
	return Backbone.Model.extend({
		diets: function() {
			return new Diets(this.get('diets'));
		},
		name: function() {
			return this.get('name');  
		},
		sex: function() {
			return this.get('sex');
		},
		age: function() {
			var today = new Date();
			var birthDate = new Date(this.get('bird'));
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		},
		isNeedCompanion: function() {
			var age = this.age();
			if (age >= 60 || age <= 12) {
				return true;
			}

			return false;
		},
		isNeedAssistance: function() {
			var last = this.diets().last();
			
			var date = last.createdAt();
			var now = new Date();
			var diff = Math.round((now - date)/1000/60/60/24);
			return (diff !== 0 && diff % LevelOfAssistance.byLevel(last.levelOfAssistance()) === 0);
		},
		imc: function(index) {
			var last = this.diets().at(index);
			if(last === undefined){ return 0 };
			
			var weight = parseFloat(last.weight());
			var height = parseFloat(last.height());
			
			return (weight / (height * height)).toFixed(2);
		},
		tmb: function(index) {
			var last = this.diets().at(index);
			if(last === undefined){ return 0 };
			
			var weight = parseFloat(last.weight());
			var height = parseFloat(last.height());
			var age = this.age();
			
			if (this.sex() === "M") {
				return (66.5 + (13.75 * weight) + (5.003 * (height * 100)) - (6.775 * age)).toFixed(2);
			}

			return (655.1 + (9.563 * weight) + (1.850 * (height * 100)) - (4.676 * age)).toFixed(2);
		},
		ndc: function(index) {
			var tmb = this.tmb(index);

			return [(tmb * 1.2).toFixed(2), (tmb * 1.375).toFixed(2), (tmb * 1.725).toFixed(2), (tmb * 1.9).toFixed(2)];
		}
	});
});
