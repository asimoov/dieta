define([
  'jquery',
  'underscore',
  'backbone',
  'models/patient',
  'models/interment'
], function($, _, Backbone, Patient, Interment) {
	"use strict";
	return Backbone.Collection.extend({
		url: 'interments?_format=json',
		model: Interment
	});
});
