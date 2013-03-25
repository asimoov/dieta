define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!../../templates/diets/new.html'
], function($, _, Backbone, home) {
	var NewView = Backbone.View.extend({
		el : 'section#center',
		render : function() {
			$(this.el).html(home);
		}
	});

	var initialize = function(options) {
		var newView = new NewView(options);
		newView.render();
	};

	return {
		initialize : initialize
	};
});