define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  return Backbone.Model.extend({
	urlRoot: 'wards',
	initialize: function() {
		var Interments = require("collections/interments");
		this.set({"interments": new Interments(this.get('interments'))});
	},
	description: function() {
		return this.get('description');
	}
  });
});
