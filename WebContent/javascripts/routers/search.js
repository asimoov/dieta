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
			var options = {data: {"q": q}, cache: false, expires: -10, reset: true};
	
			interments.fetch(options);
			ViewManager.render('section#center', new IntermentsView({"q": q, collection: interments, root: '#search/' + q + "/interments"}));
		},
		show: function(q, intermentId) {
			var interments = new Interments();
			var interment = new Interment({id: intermentId});
			var options1 = {data: {"q": q}, cache: false, expires: -10, reset: true};
			var options2 = {data: {"_format": "json"}, cache: false, expires: -10, };

			interments.fetch(options1);
			interment.fetch(options2);
			ViewManager.render('section#center', new IntermentsView({"q": q, collection: interments, selected: interment, root: "#search/" + q + "/interments"}));
		}
	});
});
