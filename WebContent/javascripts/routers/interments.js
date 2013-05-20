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
			
			var params = {data: {"_format": "json"}, cache: true};
			$.when(interments.fetch(params)).then($.proxy(function() {
				this.clear();
				this.intermentsView = new IntermentsView({el : 'section#center', collection: interments, root: '#interments'});
				this.intermentsView.render();
			}, this));
		},
		show: function(intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});

			var params1 = {cache: true};
			var params2 = {data: {"_format": "json" }, cache: true};
			$.when(interments.fetch(params1), interment.fetch(params2)).then($.proxy(function() {
				this.clear();
				this.intermentsView = new IntermentsView({el : 'section#center', collection: interments, selected: interment, root: '#interments'});
				this.intermentsView.render();
			}, this));
		},
		clear: function() {
			if (this.intermentsView) {
				this.intermentsView.close();
			}
		}
	});
});