define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment', 
  'models/ward',
  'collections/wards',
  'views/home',
  'views/wards/_wards',
  'views/wards/_interments',
], function($, _, Backbone, fetchCache, Interment, Ward, Wards, HomeView, WardsView, IntermentsView) {
  var WardsRouter = Backbone.Router.extend({
      routes: {
        'wards/:ward_id/interments':               "interments",
        'wards/:ward_id/interments/:interment_id': "details",
      },
      interments: function(wardId) {
		var ward = new Ward({id: wardId});
		ward.fetch({
			data: { "_format": "json" },
			cache: true,
			success: function() {
				IntermentsView.initialize({model : ward});
			}
		});
      },
      details: function(wardId, intermentId) {
  		var interment = new Interment({id: intermentId});
  		var ward = new Ward({id: wardId});
  		$.when(ward.fetch({data: {"_format": "json" }, cache: true}), interment.fetch({data: {"_format": "json" }, cache: true}))
  			.then(function() {
  				IntermentsView.initialize({model : ward, interment: interment});
  		});
      }
    });

    var initialize = function() {
      new WardsRouter();
    };

    return {
      initialize: initialize
    };
});
