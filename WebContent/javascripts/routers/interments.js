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
  'views/interments/interments',
  'views/wards/wards'
], function($, _, Backbone, fetchCache, Interment, Ward, Interments, Wards, HomeView, IntermentsView, WardsView) {
  var IntermentsRouter = Backbone.Router.extend({
      routes: {
    	'interments'				: "index",
        'interments/:interment_id'	: "show"
      },		
      initialize: function() {
    	  this.bind('route', this.trackPageview);
      },
      index: function(intermentId) {
    		var interments = new Interments();
    		var options = {data: {"_format": "json"}, cache: true};
    		$.when(interments.fetch(options)).then(function() {
    			var intermentsView = new IntermentsView({el : 'section#center', collection: interments});
    			intermentsView.render();
    		});
      },
      show: function(intermentId) {
  		var interments = new Interments();
  		var interment = new Interment({id: intermentId});
  		var options = {data: {"_format": "json" }, cache: true};
  		$.when(interments.fetch(options), interment.fetch(options)).then(function() {
  			interment.initialize();
  			
  			var intermentsView = new IntermentsView({el : 'section#center', collection: interments, selected: interment});
  			intermentsView.render();
  		});
      },		
      trackPageview: function () {
	        var url = Backbone.history.getFragment();
	        //prepend slash
	        if (!/^\//.test(url) && url != "") {
	            url = "/" + url;
	        }

	        _gaq.push(['_trackPageview', url]);
      }
    });

    var initialize = function() {
      new IntermentsRouter();
    };

    return {
      initialize: initialize
    };
});
