define([
  'jquery',
  'underscore',
  'backbone',
  'models/variation'
], function($, _, Backbone, Variation) {
	"use strict";
	return Backbone.Collection.extend({
		model: Variation
	});
});
