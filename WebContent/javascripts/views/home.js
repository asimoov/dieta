define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!../templates/index.html'
], function($, _, Backbone, home) {
	var HomeView = Backbone.View.extend({
		el : $('body'),
		render : function() {
			this.el.innerHTML = home;
		},
	});

	var initialize = function() {
		var homeView = new HomeView();
		homeView.render();
	};

	return {
		initialize : initialize
	};
});