define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'keymaster',
  'text!templates/index.html'
], function($, _, Backbone, Keymaster, home) {
	var HomeView = Backbone.View.extend({
		el : $('body'),
		events: {
			"submit #search":	"search"
		},
		render : function() {
			this.el.innerHTML = home;
			
		    key('shift+q', function(){ window.location.href = "/dieta/j_spring_security_logout"; });
		    key('shift+a', function(){ Backbone.history.navigate('', true);  });
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