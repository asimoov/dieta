define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'jquery-ui',
  'models/session',
  'text!templates/login.html'
], function($, _, Backbone, Ui, Session, home) {
	var LoginView = Backbone.View.extend({
		el: 'body',
		events: {
			"submit #dialog-form form": "submit"
		},
		render: function() {
			if(!$("#dialog-form").length) {
				$(this.el).append(home);
			}
		},
		submit: function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			
			Session.login({"j_username": $("#dialog-form #login").val(), "j_password": $("#dialog-form #password").val()});
			
			return false;
		}
	});

	return new LoginView();
});