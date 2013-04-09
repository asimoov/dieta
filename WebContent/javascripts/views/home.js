define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'text!../templates/index.html'
], function($, _, Backbone, home) {
	var HomeView = Backbone.View.extend({
		el : $('body'),
		events: {
			"submit #search":	"search"
		},
		render : function() {
			this.el.innerHTML = home;
		},
		search: function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			
			Backbone.history.navigate('search/' + $("#q").val(), true); 
			return false;
		}
	});

	var initialize = function() {
		var homeView = new HomeView();
		homeView.render();
	};

	return {
		initialize : initialize
	};
});