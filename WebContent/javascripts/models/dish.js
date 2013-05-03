define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
	"use strict";
	return Backbone.Model.extend({
		period: function() {
			if (this.get('period') === "12") {
				return "Almoço";
			} else if (this.get('period') === "8") {
				return "Desjejum";
			} else if (this.get('period') === "10") {
				return "Lanche";
			}
  
			return this.get('period') + "h";
		}
	});
});
