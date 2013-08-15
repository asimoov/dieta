define([
  'jquery', 
  'underscore', 
  'backbone',
  'helpers/analytics', 
  'models/session',
  'helpers/viewmanager',
  'collections/wards',
  'routers/home',
  'routers/diets',
  'routers/search',
  'routers/wards',
  'views/application',
  'views/wards/wards',
], function($, _, Backbone, Analytics, Session, ViewManager, Wards, HomeRouter, DietsRouter, SearchRouter, WardsRouter, ApplicationView, WardsView) {
	"use strict";
	var initialize = function() {
		Session.getAuth(function() {
			ViewManager.render('body', new ApplicationView({el: 'body'}));

			var wards = new Wards();
			wards.fetch({reset: true});
			ViewManager.render('.primary-sidebar', new WardsView({collection: wards}));
			
			var routes = [HomeRouter, DietsRouter, SearchRouter, WardsRouter];
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
