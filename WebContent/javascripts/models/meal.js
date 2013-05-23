define([
  'backbone',
  'models/nature',
  'collections/variations'
], function(Backbone, Nature, Variations) {
	"use strict";
	return Backbone.Model.extend({
		period: function() {
			var period = parseInt(this.get('period'), 10);

			if(period <= 23 && period >= 0) {
				var periods = {12: "Almoço", 8: "Desjejum", 10: "Colação", 15: "Lanche"};
				period = periods[period] || period + "h";
				
				return period;
			}
		},
		nature: function() {
			return new Nature(this.get("nature"));
		},
		variations: function() {
			return new Variations(this.get("variations"));
		},
		validate: function() {
			if(!this.nature().isValid() && this.variations().length === 0) {
				return "meal invalido";
			}
		}
	});
});
