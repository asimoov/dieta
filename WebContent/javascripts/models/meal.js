define([
  'jquery',
  'underscore',
  'backbone',
  'collections/variations'
], function($, _, Backbone, Variations) {
	"use strict";
	return Backbone.Model.extend({
		variations: function() {
			return new Variations(this.get("variations"));
		}
	});
});
