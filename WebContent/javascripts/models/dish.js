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
			var periods = {"12": "Almoço", "8": "Desjejum", "10": "Colação", "15": "Colação"};
			var period = periods[this.get('period')] || this.get('period') + "h";
			
			return period;
		}
	});
});
