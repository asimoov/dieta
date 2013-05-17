define([
  'backbone',
  'models/dish',
  'collections/variations'
], function(Backbone, Dish, Variations) {
	"use strict";
	return Backbone.Model.extend({
		dish: function() {
			return new Dish(this.get("dish"));
		},
		variations: function() {
			return new Variations(this.get("variations"));
		}
	});
});
