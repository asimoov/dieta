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
		age: function() {
			var today = new Date();
			var birthDate = new Date(Date.parse(this.get('bird')));
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
			return (diff !== 0 && diff % LevelOfAssistance.byDay(last.levelOfAssistance()) === 0);
		}
	});
});
