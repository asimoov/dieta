define([  
  'jquery',
  'underscore',
  'backbone'
], function() {
	var analytics = {};

	_.extend(analytics, Backbone.Events);
	analytics.on("track", function() {
		var url = Backbone.history.getFragment();
		// prepend slash
		if (!/^\//.test(url) && url !== "") {
			url = "/" + url;
		}

		_gaq.push([ '_trackPageview', url ]);
	});

	return analytics;
});
