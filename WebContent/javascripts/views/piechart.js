define([ 
  'jquery', 
  'underscore', 
  'backbone',
  'raphael', 
  'graphael', 
  'gpie',
  'text!templates/piechart.html'
], function($, _, Backbone, Raphael, gRaphael, gPie, home) {
	var PieChartView = Backbone.View.extend({
		el: '.primary-sidebar',
		render: function() {
			$("#piechart", this.el).remove();
			$(this.el).append(home);
			
			var totals = this.collection.totals();
			var ok = totals["ok"] === undefined ? 0.002 : totals["ok"];
			var nulo = totals["nulo"] === undefined ? 0.002 : totals["nulo"];
			var assistance = totals["assistance"] === undefined ? 0.002 : totals["assistance"];

			var r = Raphael("piechart");
            r.piechart(100, 180, 80, [ok, assistance, nulo],{
            	colors: ["#aa433a", "#a37f11", "#8cc079"]
            });
		}
	});

    var initialize = function(options) {
        var pieChartView = new PieChartView(options);
        pieChartView.render();
    };

    return {
    	initialize: initialize
    };
});