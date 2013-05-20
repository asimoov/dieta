define([
  'jquery',
  'backbone',
  'viewmanager',
  'models/interment',
  'collections/foods', 
  'collections/natures', 
  'views/diets/new',
], function($, Backbone, ViewManager, Interment, Foods, Natures, NewView) {
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
				ViewManager.render('section#center', new NewView({interment: interment, "natures": natures, "foods": foods}));
			}, this));
		}
	});
});
