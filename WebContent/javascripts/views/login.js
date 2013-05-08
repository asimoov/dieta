define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/session',
  'text!templates/login.html'
], function($, _, Backbone, Session, home) {
	var LoginView = Backbone.View.extend({
		el: 'body',
		events: {
			"submit #dialog-form form": "submit"
		},
		render: function() {
			this.$el.empty();
			this.$el.append(home);
		},
		submit: function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			
			Session.login({"j_username": $("#dialog-form #login").val(), "j_password": $("#dialog-form #password").val()}, function() {
				window.location.reload();
			});

			return false;
		}
	});

	return new LoginView();
});