define([
  'jquery',
  'underscore',
  'backbone',
  'fetchCache',
  'views/login'
], function($, _, Backbone, fetchCache, Login) {
  var UserRouter = Backbone.Router.extend({
      routes: {
    	'sign-in': "signin",
      },
      initialize: function() {
    	  this.bind('route', this.trackPageview);
      },
      signin: function() {
    	  Login.render();
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
  
    return new UserRouter();
});
