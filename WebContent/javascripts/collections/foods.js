define([
  'jquery',
  'underscore',
  'backbone',
  'models/food'
], function($, _, Backbone, Food) {
  return Backbone.Collection.extend({
	url: 'foods?_format=json',
  	model: Food,
  	comparator: function(model) {
  	    return model.get('description');
  	}
  });
});
