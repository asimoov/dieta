define([
  'jquery',
  'underscore',
  'backbone',
  'models/nature'
], function($, _, Backbone, Nature) {
	"use strict";
	return Backbone.Model.extend({
		nature: function() {
			return new Nature(this.get('nature'));
		},
		period: function() {
			if (this.get('period') == "12") {
				return "Almoço";
			} else if (this.get('period') == "8") {
				return "Desjejum";
			} else if (this.get('period') == "10") {
				return "Colação";
			} else if (this.get('period') == "15") {
				return "Lanche";
			}
  
			return this.get('period') + "h";
		}
	});
});
