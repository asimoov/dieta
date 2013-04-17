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
      signin: function() {
    	  Login.render();
      }
    });
  
    return new UserRouter();
});
