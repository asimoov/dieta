define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!templates/interments/selected.html'
], function($, _, Backbone, home) {
	return Backbone.View.extend({
		template: _.template(home),
		initialize: function() {
			this.listenTo(this.model, 'all', function() { this.close(); this.render(); } );
		},
		serialize: function() {
			return {"model": this.model, "interment": this.options.interment};
		},
		render: function() {
			return this.$el.append(this.template(this.serialize()));
		},
		close: function() {
			this.$el.unbind().empty();
		}
	});
});