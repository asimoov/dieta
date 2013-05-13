define([
  'jquery',
  'underscore',
  'backbone',
  'models/food'
], function($, _, Backbone, Food) {
  return Backbone.Model.extend({
	  quantity: function(){
		  return parseFloat(this.get('quantity'));
	  },
	  food: function() {
		  return new Food(this.get('food'));
	  }
  });
});
