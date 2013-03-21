define([
  'jquery', 
  'underscore', 
  'backbone',
  'collections/wards',
  'routers/app',
  'routers/interments',
  'routers/wards',
  'views/home',
  'views/wards/_wards',
], function($, _, Backbone, Wards, AppRouter, IntermentsRouter, WardsRouter, HomeView, WardsView) {
  var initialize = function() {
	HomeView.initialize();
	var wards = new Wards();
    wards.fetch({
    	cache: true,
    	success: function() {
    		WardsView.initialize({collection : wards});
    	}
    });
    
    AppRouter.initialize();
    IntermentsRouter.initialize();
    WardsRouter.initialize();
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
