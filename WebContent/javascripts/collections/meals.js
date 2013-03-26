define([
  'jquery',
  'underscore',
  'backbone',
  'models/meal'
], function($, _, Backbone, Meal) {
  return Backbone.Collection.extend({
	  model: Meal,
	  byType: function(type) {
		  return  this.filter(function(meal) {
			  return meal.get('dish').nature.type === type;
		  });
	  }
  });
});
