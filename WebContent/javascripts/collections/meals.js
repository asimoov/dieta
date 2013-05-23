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
			return this.find(function(meal) {
				return meal.get('period') == hour;
			});
		},
		comparator: function(model) {
			return Period.periods.indexOf(parseInt(model.get('period')));
		}
	});
});
