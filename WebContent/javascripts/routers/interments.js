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
  'views/interments/_interments',
  'views/wards/_wards',
], function($, _, Backbone, fetchCache, Interment, Ward, Interments, Wards, HomeView, IntermentsView, WardsView) {
  var WardsRouter = Backbone.Router.extend({
      routes: {
        'interments/:interment_id': "details"
      },
      details: function(intermentId) {
  		var interments = new Interments();
  		var interment = new Interment({id: intermentId});
  		var options = {data: {"_format": "json" }, cache: true};
  		$.when(interments.fetch(options), interment.fetch(options)).then(function() {
  			IntermentsView.initialize({collection: interments, selected: interment});
  		});
      }
    });

    var initialize = function() {
      new WardsRouter();
    };

    return {
      initialize: initialize
    };
});
