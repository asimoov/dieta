define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/period',
  'collections/wards',
  'collections/interments',
  'views/home',
  'views/wards/_wards',
  'views/interments/_interments',
], function($, _, Backbone, fetchCache, Period, Wards, Interments, HomeView, WardsView, IntermentsView) {
  var AppRouter = Backbone.Router.extend({
      routes: {
        // Default
        '':         "home",
        '/':        "home",
        '*actions': "defaultAction"
      },
      home: function() {
        var interments = new Interments();
        interments.fetch({
        	cache: true,
        	success: function() {
        		IntermentsView.initialize({collection : interments});
        	}
        });
      },
      defaultAction: function() {
        console.log('default action');
      }
    });

    var initialize = function() {
      new AppRouter();
    };

    return {
      initialize: initialize
    };
});
