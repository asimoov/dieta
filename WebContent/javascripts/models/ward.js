define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  return Backbone.Model.extend({
	urlRoot: 'wards',
	interments: function() {
		var Interments = require("collections/interments");
		return new Interments(this.get('interments'));
	},
	description: function() {
		return this.get('description');
	}
  });
});
