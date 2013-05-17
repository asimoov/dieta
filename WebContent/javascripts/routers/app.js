define([
  'backbone',
  'routers/interments'
], function(Backbone, IntermentsRouter) {
	return Backbone.Router.extend({
		routes: {
			// Default
			'':         "home",
			'/':        "home",
			'*actions': "defaultAction"
		},
		home: function() {
			this.navigate("interments", {trigger: true, replace: true});
		},
		defaultAction: function() {
			console.log('default action');
		}
	});
});
