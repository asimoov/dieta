define([
  'jquery',
  'underscore',
  'backbone',
  'viewmanager',
  'models/interment', 
  'collections/interments',
  'views/interments/interments',
], function($, _, Backbone, ViewManager, Interment, Interments, IntermentsView) {
	return Backbone.Router.extend({
		routes: {
			'interments'              : "index",
			'interments/:interment_id': "show"
		},
		index: function(intermentId) {
			var interments = new Interments();
			
			var params = {data: {"_format": "json"}, cache: true};
			$.when(interments.fetch(params)).then($.proxy(function() {
				ViewManager.render('section#center', new IntermentsView({collection: interments, root: '#interments'}));
			}, this));
		},
		show: function(intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});

			var params1 = {cache: true};
			var params2 = {data: {"_format": "json" }, cache: true};
			$.when(interments.fetch(params1), interment.fetch(params2)).then($.proxy(function() {
				ViewManager.render('section#center', new IntermentsView({collection: interments, selected: interment, root: '#interments'}));
			}, this));
		}
	});
});