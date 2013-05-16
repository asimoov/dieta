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
		initialize: function() {
			this.bind('route', this.trackPageview);
		},
		home: function() {
			this.navigate("interments", {trigger: true, replace: true});
		},
		defaultAction: function() {
			console.log('default action');
		},
		trackPageview: function () {
			var url = Backbone.history.getFragment();
			//prepend slash
			if (!/^\//.test(url) && url !== "") {
				url = "/" + url;
			}
			
			_gaq.push(['_trackPageview', url]);
		}
	});
	
	var initialize = function() {
		new AppRouter();
	};

	return {
		initialize: initialize
	};
});
