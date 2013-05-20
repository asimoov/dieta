define([
  'backbone',
  'views/login'
], function(Backbone, Login) {
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
