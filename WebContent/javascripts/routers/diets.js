define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment',
  'collections/foods', 
  'collections/natures', 
  'views/diets/new',
], function($, _, Backbone, fetchCache, Interment, Foods, Natures, NewView) {
	return Backbone.Router.extend({
		routes: {
			'interments/:interment_id/diets/new': "new"
		},
		"new": function(intermentId) {
			var interment = new Interment({id: intermentId});
			var natures = new Natures();
			var foods = new Foods();

			var params = {data: {"_format": "json" }, cache: true};
			$.when(interment.fetch(params), natures.fetch({cache: true}), foods.fetch({expires: 86400, cache: true})).then(function() {
				var newView = new NewView({el: 'section#center', interment: interment, "natures": natures, "foods": foods});
				newView.render();
			});
		}
	});
});
