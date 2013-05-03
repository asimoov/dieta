define([
  'jquery',
  'underscore',
  'backbone',
  'models/food'
], function($, _, Backbone, Food) {
	"use strict";
	return Backbone.Collection.extend({
		url: 'foods?_format=json',
		model: Food,
		comparator: function(model) {
		return model.get('description');
		}
	});
});
