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
  'views/wards/wards',
  'views/interments/interments'
], function($, _, Backbone, fetchCache, Interment, Ward, Interments, Wards, HomeView, WardsView, IntermentsView) {
	return Backbone.Router.extend({
		routes: {
			'wards/:ward_id/interments'              : "interments",
			'wards/:ward_id/interments/:interment_id': "details",
		},
		interments: function(wardId) {
			var ward = new Ward({id: wardId});
			$.when(ward.fetch({data: { "_format": "json" },cache: true})).then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', ward: ward, collection: ward.interments(), root: "#wards/" + ward.id + "/interments"});
				intermentsView.render();
			});
		},
		details: function(wardId, intermentId) {
			var interment = new Interment({id: intermentId});
			var ward = new Ward({id: wardId});
			$.when(ward.fetch({data: {"_format": "json" }, cache: true}), interment.fetch({data: {"_format": "json" }, cache: true}))
			.then(function() {
				var intermentsView = new IntermentsView({el : 'section#center', ward: ward, collection: ward.interments(), selected: interment, root: "#wards/" + ward.id + "/interments/" + intermentId});
				intermentsView.render();
			});
		}
	});
});
