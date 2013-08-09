define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!templates/index.html'
], function($, _, Backbone, home) {
	return Backbone.View.extend({
		template: _.template(home),
		render : function() {
			this.makeSelector();
			this.$el.append(this.template());
		},
		makeSelector: function() {
			$("li.active").removeClass("active");
			$("a[href~='#']").parent().addClass("active");
		},
		close: function() {
			this.$el.unbind().empty();
		}
	});
});