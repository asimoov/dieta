define([
  'jquery',
  'underscore',
  'backbone',
  'models/meal',
  'models/period'
], function($, _, Backbone, Meal, Period) {
	"use strict";
	return Backbone.Collection.extend({
		model: Meal,
		byHour: function(hour) {
			return  this.filter(function(meal) {
				return meal.period == hour;
			});
		},
		comparator: function(model) {
			return Period.periods.indexOf(parseInt(model.period));
		}
	});
});
