define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'models/interment', 
  'views/diets/new',
], function($, _, Backbone, fetchCache, Interment, NewView) {
  var DietsRouter = Backbone.Router.extend({
      routes: {
        'interments/:interment_id/diets/new': "new"
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
      new DietsRouter();
    };

    return {
      initialize: initialize
    };
});
