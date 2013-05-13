define([
  'jquery',
  'underscore',
  'backbone',
  'collections/meals'
], function($, _, Backbone, Meals) {
	"use strict";
	return Backbone.Model.extend({
		urlRoot: "diets",
		meals: function() {
			return new Meals(this.get('meals'));
		}
	});
});
