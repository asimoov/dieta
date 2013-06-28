define([ 
  'backbone', 
  'text!templates/alert.html'
], function(Backbone, home) {
	var AlertView = Backbone.View.extend({
		events: {
			"click .close":	"close"
		},
		template: _.template(home),
		render: function(options) {
			this.$el.prepend(this.template(options));
		},
		close: function(ev) {
			this.$el.empty().unbind();
		}
	});

	return {
		success: function() {
			var alertView = new AlertView({el: "#log"});
			alertView.render({text: "<strong>Add Dieta!</strong> Você add uma dieta com sucesso.", status: "success"});
		},
		error: function() {
			var alertView = new AlertView({el: "#log"});
			alertView.render({text: "<strong>Add Dieta!</strong> Você add uma dieta com sucesso.", status: "error"});
		}
	};
});