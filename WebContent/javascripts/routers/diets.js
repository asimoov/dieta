define([
  'jquery',
  'backbone',
  'models/interment',
  'collections/foods', 
  'collections/natures', 
  'views/diets/new',
], function($, Backbone, Interment, Foods, Natures, NewView) {
	return Backbone.Router.extend({
		routes: {
			'interments/:interment_id/diets/new': "new"
		},
		"new": function(intermentId) {
			var interment = new Interment({id: intermentId});
			var natures = new Natures();
			var foods = new Foods();

			var params1 = {data: {"_format": "json"}, cache: true};
			var params2 = {expires: 86400, cache: true};
			$.when(interment.fetch(params1), natures.fetch(params2), foods.fetch(params2)).then($.proxy(function() {
				this.clear();
				this.newView = new NewView({el: 'section#center', interment: interment, "natures": natures, "foods": foods});
				this.newView.render();
			}, this));
		},
		clear: function() {
			if (this.newView) {
				this.newView.close();
			}
		}
	});
});
