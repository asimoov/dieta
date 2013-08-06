define([
  'jquery', 
  'underscore', 
  'backbone',
  'helpers/analytics', 
  'models/session',
  'collections/wards',
  'routers/home',
  'routers/diets',
  'routers/interments',
  'routers/search',
  'routers/wards',
  'views/application',
  'views/wards/wards',
], function($, _, Backbone, Analytics, Session, Wards, HomeRouter, DietsRouter, IntermentsRouter, SearchRouter, WardsRouter, ApplicationView, WardsView) {
	"use strict";
	var initialize = function() {
		Session.getAuth(function() {
			var applicationView = new ApplicationView({el: 'body'});
			applicationView.render();

			var wards = new Wards();
			$.when(wards.fetch({cache: true})).then(function() {
				var wardsView = new WardsView({el: '.primary-sidebar', collection: wards});
				wardsView.render();
			});
			
			var routes = [HomeRouter, DietsRouter, SearchRouter, IntermentsRouter, WardsRouter];
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
