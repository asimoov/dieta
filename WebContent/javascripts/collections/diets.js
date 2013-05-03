define([
  'jquery',
  'underscore',
  'backbone',
  'models/diet'
], function($, _, Backbone, Diet) {
	"use strict";
	
	return Backbone.Collection.extend({
		model: Diet
	});
});
