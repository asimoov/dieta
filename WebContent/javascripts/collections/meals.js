define([
  'jquery',
  'underscore',
  'backbone',
  'models/meal'
], function($, _, Backbone, Meal) {
  return Backbone.Collection.extend({
	  model: Meal,
	  byHour: function(hour) {
		  return  this.filter(function(meal) {
			  return meal.get('dish') !== undefined && meal.get('dish').period == hour;
		  });
	  }
  });
});
