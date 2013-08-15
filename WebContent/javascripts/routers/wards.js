define([
  'jquery',
  'underscore',
  'backbone',
  'helpers/viewmanager',
  'models/interment', 
  'models/ward',
  'collections/interments',
  'collections/wards',
  'views/home',
  'views/wards/wards',
  'views/interments/interments'
], function($, _, Backbone, ViewManager, Interment, Ward, Interments, Wards, HomeView, WardsView, IntermentsView) {
	return Backbone.Router.extend({
		routes: {
			'wards/:ward_id/interments'              : "interments",
			'wards/:ward_id/interments/:interment_id': "details",
		},
		interments: function(wardId) {
			var ward = new Ward({id: wardId});
			ward.fetch({data: { "_format": "json" }});
			ViewManager.render('section#center', new IntermentsView({ward: ward, root: "#wards/" + ward.id + "/interments"}));
		},
		details: function(wardId, intermentId) {
			var interment = new Interment({id: intermentId});
			var ward = new Ward({id: wardId});
			
			var params = {data: {"_format": "json" }};
			ward.fetch(params);
			interment.fetch(params);
			ViewManager.render('section#center', new IntermentsView({ward: ward, collection: ward.interments(), selected: interment, root: "#wards/" + ward.id + "/interments"}));
		}
	});
});
