define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'collections/interments',
  'views/interments/_interments',
], function($, _, Backbone, fetchCache, Interments, IntermentsView) {
  var SearchRouter = Backbone.Router.extend({
      routes: {
        'search?q=:query': "home",
      },
      home: function(q) {
        var interments = new Interments();
        interments.fetch({
        	cache: false,
        	expires: -10,
        	data: {"q": q},
        	success: function() {
        		IntermentsView.initialize({collection : interments});
        	}
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
