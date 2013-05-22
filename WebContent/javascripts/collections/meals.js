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
		comparator: function(model) {
			return Period.periods.indexOf(parseInt(model.get('period')));
		}
	});
});
