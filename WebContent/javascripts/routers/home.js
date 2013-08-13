define([
  'backbone',
  'helpers/viewmanager',
  'views/home',
], function(Backbone, ViewManager, HomeView) {
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
