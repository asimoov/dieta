define([
  'jquery',
  'underscore',
  'backbone',
  'models/ward'
], function($, _, Backbone, Ward) {
	"use strict";
	return Backbone.Collection.extend({
		url: 'wards?_format=json',
		model: Ward
	});
});
