define([
  'jquery',
  'underscore',
  'backbone',
  'collections/meals'
], function($, _, Backbone, Meals) {
	"use strict";
	return Backbone.Model.extend({
		urlRoot: "diets",
		initialize: function() {
			this.set({"meals": new Meals(this.get('meals'))});
		}
	});
});
