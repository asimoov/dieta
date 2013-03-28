define([
  'jquery',
  'underscore',
  'backbone',
  'models/meal'
], function($, _, Backbone, Meal) {
  return Backbone.Collection.extend({
	  model: Meal,
	  byHourAndType: function(hour, type) {
		  return  this.filter(function(meal) {
			  return meal.get('dish') !== undefined && meal.get('dish').period == hour && meal.get('dish').nature.type === type;
		  });
	  }
  });
});
