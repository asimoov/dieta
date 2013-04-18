define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment',
  'collections/interments',
  'views/search/_interments',
], function($, _, Backbone, fetchCache, Interment, Interments, IntermentsView) {
  var SearchRouter = Backbone.Router.extend({
      routes: {
    	'search/:query':                          "home",
    	'search/:query/interments/:interment_id': "home"
      },
      home: function(q, intermentId) {
    	var interments = new Interments();
        var interment = new Interment({id: intermentId});
        var options1 = {cache: false, expires: -10, data: {"q": q, "_format": "json"}};
        var options2 = {cache: false, expires: -10, data: {"_format": "json"}};
        
		$.when(interments.fetch(options1), interment.fetch(options2)).then(function() {
  			IntermentsView.initialize({"q": q, collection: interments, selected: interment});
  		});
      }
    });

    var initialize = function() {
      new SearchRouter();
    };

    return {
      initialize: initialize
    };
});
