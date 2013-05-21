define([
  'jquery',
  'underscore',
  'backbone',
  'models/diet'
], function($, _, Backbone, Diet) {
	"use strict";
	
	return Backbone.Collection.extend({
		model: Diet,
		comparator: function(model) {
			return -(new Date(model.get('createdAt'))).getTime();
		}
	});
});
