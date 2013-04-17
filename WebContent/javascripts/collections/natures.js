define([
  'jquery',
  'underscore',
  'backbone',
  'models/nature'
], function($, _, Backbone, Nature) {
  return Backbone.Collection.extend({
	url: 'natures?_format=json',
  	model: Nature,
  	comparator: function(model) {
  	    return model.get('description');
  	}
  });
});
