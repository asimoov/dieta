define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!templates/index.html'
], function($, _, Backbone, home) {
	return Backbone.View.extend({
		template: _.template(home),
		render : function() {
			this.$el.append(this.template());
		},
		close: function() {
			this.$el.unbind().empty();
		}
	});
});