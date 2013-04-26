define([
  'jquery',
  'underscore',
  'backbone',
  'models/food'
], function($, _, Backbone, Food) {
  return Backbone.Model.extend({
	  initialize: function() {
		  this.set({"food": new Food(this.get('food'))});
	  }
  });
});
