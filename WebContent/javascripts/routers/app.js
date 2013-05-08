define([
  'jquery',
  'underscore',
  'backbone',
  'routers/interments'
], function($, _, Backbone, IntermentsRouter) {
	var AppRouter = Backbone.Router.extend({
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

    var initialize = function() {
      new AppRouter();
    };

    return {
      initialize: initialize
    };
});
