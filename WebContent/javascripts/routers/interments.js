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
  'views/interments/new',
  'views/interments/_interments',
  'views/wards/_wards',
], function($, _, Backbone, fetchCache, Interment, Ward, Interments, Wards, HomeView, NewView, IntermentsView, WardsView) {
  var IntermentsRouter = Backbone.Router.extend({
      routes: {
        'interments/:interment_id':     "details",
        'interments/:interment_id/new': "new"
      },
      details: function(intermentId) {
  		var interments = new Interments();
  		var interment = new Interment({id: intermentId});
  		var options = {data: {"_format": "json" }, cache: true};
  		$.when(interments.fetch(options), interment.fetch(options)).then(function() {
  			IntermentsView.initialize({collection: interments, selected: interment});
  		});
      },
      "new": function(intermentId) {
    	  alert("coleeeee" + intermentId);
    	  
    	  var interment = new Interment({id: intermentId});
    	  interment.fetch({
    		  data: {"_format": "json" }, 
    		  cache: true,
    		  success: function() {
    			  NewView.initialize({model: interment});
    		  }
    	  });
      }
    });

    var initialize = function() {
      new IntermentsRouter();
    };

    return {
      initialize: initialize
    };
});
