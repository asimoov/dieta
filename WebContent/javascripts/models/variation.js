define([
  'jquery',
  'underscore',
  'backbone',
  'models/food'
], function($, _, Backbone, Food) {
  return Backbone.Model.extend({
	  initialize: function() {
		  this.set({"quantity": parseFloat(this.get('quantity'))});
		  this.set({"food": new Food(this.get('food'))});
	  }
  });
});
