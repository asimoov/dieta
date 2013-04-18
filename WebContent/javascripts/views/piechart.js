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
			var r = Raphael("piechart");
            r.piechart(100, 180, 80, _.flatten(totals), {
            	colors: ["#aa433a", "#a37f11", "#8cc079"],
            	stroke: "#fff"
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