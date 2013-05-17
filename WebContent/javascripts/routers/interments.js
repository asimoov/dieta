define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment', 
  'collections/interments',
  'views/interments/interments',
], function($, _, Backbone, fetchCache, Interment, Interments, IntermentsView) {
	return Backbone.Router.extend({
		routes: {
			'interments'              : "index",
			'interments/:interment_id': "show"
		},
		index: function(intermentId) {
			var interments = new Interments();
			var options = {data: {"_format": "json"}, cache: true};
			$.when(interments.fetch(options)).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', collection: interments, root: '#interments'});
				intermentsView.render();
			});
		},
		show: function(intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});

			$.when(interments.fetch({cache: true}), interment.fetch({data: {"_format": "json" }, cache: true})).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', collection: interments, selected: interment, root: '#interments'});
				intermentsView.render();
			});
		}
	});
});