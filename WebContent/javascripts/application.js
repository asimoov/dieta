define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/session',
  'collections/wards',
  'routers/app',
  'routers/diets',
  'routers/interments',
  'routers/search',
  'routers/wards',
  'views/home',
  'views/wards/_wards',
], function($, _, Backbone, Session, Wards, AppRouter, DietsRouter, IntermentsRouter, SearchRouter, WardsRouter, HomeView, WardsView) {
  var initialize = function() {  
	Session.getAuth(function() {
		HomeView.initialize();
		
		var wards = new Wards();
	    wards.fetch({
	    	cache: true,
	    	success: function() {
	    		WardsView.initialize({collection : wards});
	    	}
	    });
	    
	    AppRouter.initialize();
	    DietsRouter.initialize();
	    SearchRouter.initialize();
	    IntermentsRouter.initialize();
	    WardsRouter.initialize();
	    
		Backbone.history.start();
	});
  };

  return {
    initialize: initialize
  };
});
