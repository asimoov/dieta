define([ 
  'backbone', 
  'text!templates/layouts/alert.html'
], function(Backbone, home) {
	var AlertView = Backbone.View.extend({
		events: {
			"click .close":	"close"
		},
		render: function() {
			this.$el.prepend(home);
		},
		close: function(ev) {
			this.$el.empty().unbind();
		}
	});
	
	return {
		success: function() {
			var alertView = new AlertView({el: "section#log"});
			alertView.render();
		}
	};
});