define([ 
  'jquery', 
  'underscore', 
  'backbone',
  'raphael', 
  'text!templates/piechart.html'
], function($, _, Backbone, Raphael, home) {
	var PieChartView = Backbone.View.extend({
		el: '.primary-sidebar',
		render: function() {
			$("#piechart", this.el).remove();
			$(this.el).append(home);

			var totals = this.collection.totals();
			var values = [];
			var legends = [];
			var colors = [];
			for(var i in totals) {
				values.push(totals[i]);
				legends.push('%%.%% - ' + i);
				
				if (i === "Nulo") {
					colors.push("#aa433a");
				} else if (i === "Falta Assistance") {
					colors.push("#a37f11");
				} else {
					colors.push("#8cc079");
				}
			}
			var r = Raphael("piechart");
            r.piechart(100, 180, 80, values, {
            	"colors": colors,
            	legend: legends, 
                legendpos: 'south', 
                legendcolor: "#fff",
            	stroke: "#fff",
            	"stroke-width": 2
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