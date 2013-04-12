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
				$("#dialog-form").dialog({
					open: function(event, ui) { $('.ui-dialog-titlebar-close').hide(); },
					closeOnEscape: false,
					autoOpen: true,
					height: 300,
					width: 350,
					modal: true
				});
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