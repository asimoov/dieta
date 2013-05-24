define([
  'jquery',
  'underscore',
  'backbone',
  'helpers/viewmanager',
  'models/interment',
  'collections/interments',
  'views/interments/interments',
], function($, _, Backbone, ViewManager, Interment, Interments, IntermentsView) {
	return Backbone.Router.extend({
		routes: {
			'search/:query'                         : "home",
			'search/:query/interments/:interment_id': "show"
		},
		home: function(q) {
			var interments = new Interments();
			var options = {cache: false, expires: -10, data: {"q": q}};
	
			$.when(interments.fetch(options)).then($.proxy(function() {
				ViewManager.render('section#center', new IntermentsView({"q": q, collection: interments, root: '#search/' + q + "/interments"}));
			},this));
		},
		show: function(q, intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});
			var options1 = {cache: false, expires: -10, data: {"q": q}};
			var options2 = {cache: false, expires: -10, data: {"_format": "json"}};

			$.when(interments.fetch(options1), interment.fetch(options2)).then($.proxy(function() {
				ViewManager.render('section#center', new IntermentsView({"q": q, collection: interments, selected: interment, root: "#search/" + q + "/interments/" + intermentId}));
			}, this));
		}
	});
});
