define([
  'backbone',
  'helpers/viewmanager',
  'routers/interments',
  'views/home',
], function(Backbone, ViewManager, IntermentsRouter, HomeView) {
	return Backbone.Router.extend({
		routes: {
			// Default
			'':         "index",
			'*actions': "defaultAction"
		},
		index: function() {
			ViewManager.render('section#center', new HomeView({el: 'section#center'}));
		},
		defaultAction: function() {
			console.log('default action');
		}
	});
});
