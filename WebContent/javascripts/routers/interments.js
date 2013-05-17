define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment', 
  'models/ward',
  'collections/interments',
  'collections/wards',
  'views/home',
  'views/interments/interments',
  'views/wards/wards'
], function($, _, Backbone, fetchCache, Interment, Ward, Interments, Wards, HomeView, IntermentsView, WardsView) {
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
			var options = {data: {"_format": "json" }, cache: true};
			$.when(interments.fetch(options), interment.fetch(options)).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', collection: interments, selected: interment, root: '#interments'});
				intermentsView.render();
			});
		}
	});
});