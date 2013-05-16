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
  'views/wards/wards',
], function($, _, Backbone, Session, Wards, AppRouter, DietsRouter, IntermentsRouter, SearchRouter, WardsRouter, HomeView, WardsView) {
  var initialize = function() {
	"use strict";

	Session.getAuth(function() {
		var homeView = new HomeView({el: 'body'});
		homeView.render();
		
		var wards = new Wards();
		$.when(wards.fetch({cache: true})).then(function() {
			var wardsView = new WardsView({el: '.primary-sidebar', collection: wards});
			wardsView.render();
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
