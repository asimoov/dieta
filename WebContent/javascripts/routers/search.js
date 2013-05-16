define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment',
  'collections/interments',
  'views/interments/interments',
], function($, _, Backbone, fetchCache, Interment, Interments, IntermentsView) {
	var SearchRouter = Backbone.Router.extend({
		routes: {
			'search/:query':               "home",
			'search/:query/interments/:interment_id': "show"
		},
		initialize: function() {
			this.bind('route', this.trackPageview);
		},
		home: function(q) {
			var interments = new Interments();
			var options = {cache: false, expires: -10, data: {"q": q, "_format": "json"}};
	
			$.when(interments.fetch(options)).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', "q": q, collection: interments, root: '#search/' + q + "/interments"});
				intermentsView.render();
			});
		},
		show: function(q, intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});
			var options1 = {cache: false, expires: -10, data: {"q": q, "_format": "json"}};
			var options2 = {cache: false, expires: -10, data: {"_format": "json"}};

			$.when(interments.fetch(options1), interment.fetch(options2)).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', "q": q, collection: interments, selected: interment, root: "#search/" + q + "/interments/" + intermentId});
				intermentsView.render();
			});
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
		new SearchRouter();
	};

	return {
		initialize: initialize
	};
});
