define([
  'jquery',
  'backbone',
  'helpers/viewmanager',
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

			interment.fetch({data: {"_format": "json"}, reset: true});
			foods.fetch({reset: true});
			natures.fetch({reset: true});
			ViewManager.render('section#center', new NewView({interment: interment, "natures": natures, "foods": foods}));
		}
	});
});
