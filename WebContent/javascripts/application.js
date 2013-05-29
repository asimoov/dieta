define([
  'jquery', 
  'underscore', 
  'backbone',
  'helpers/analytics', 
  'models/session',
  'collections/wards',
  'routers/app',
  'routers/diets',
  'routers/interments',
  'routers/search',
  'routers/wards',
  'views/home',
  'views/wards/wards',
], function($, _, Backbone, Analytics, Session, Wards, AppRouter, DietsRouter, IntermentsRouter, SearchRouter, WardsRouter, HomeView, WardsView) {
	"use strict";
	var initialize = function() {
		Session.getAuth(function() {
			var homeView = new HomeView({el: 'body'});
			homeView.render();
			
			var wards = new Wards();
			$.when(wards.fetch({cache: true})).then(function() {
				var wardsView = new WardsView({el: '.primary-sidebar', collection: wards});
				wardsView.render();
			});
			
			var routes = [AppRouter, DietsRouter, SearchRouter, IntermentsRouter, WardsRouter];
			_.forEach(routes, function(Route) {
				var route = new Route();
				route.on('route', function() {
					Analytics.trigger('track');
				});
			});
			Backbone.history.start();
		});
	};
	
	return {
		initialize: initialize
	};
});
