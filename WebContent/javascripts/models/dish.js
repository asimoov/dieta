define([
  'backbone',
  'models/nature'
], function(Backbone, Nature) {
	"use strict";
	return Backbone.Model.extend({
		nature: function() {
			return new Nature(this.get('nature'));
		},
		period: function() {
			var period = parseInt(this.get('period'), 10);

			if(period <= 23 && period >= 0) {
				var periods = {12: "Almoço", 8: "Desjejum", 10: "Colação", 15: "Colação"};
				period = periods[period] || period + "h";
				
				return period;
			}
		}
	});
});
