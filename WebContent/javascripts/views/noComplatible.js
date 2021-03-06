define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!templates/noCompatible.html'
], function($, _, Backbone, home) {
	var NoComplatibleView = Backbone.View.extend({
		el : $('body'),
		render : function() {
			this.$el.empty();
			this.$el.append(home);
		}
	});

	var initialize = function() {
		var noComplatibleView = new NoComplatibleView();
		noComplatibleView.render();
	};

	return {
		initialize : initialize
	};
});