define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'keymaster',
  'text!templates/index.html'
], function($, _, Backbone, Keymaster, home) {
	return Backbone.View.extend({
		events: {
			"submit #search":	"search"
		},
		initialize: function() {
		    key('shift+q', function(){ window.location.href = "/dieta/j_spring_security_logout"; });
		    key('shift+a', function(){ Backbone.history.navigate('', true);  });
		},
		render : function() {
			this.$el.empty();
			this.$el.append(home);
		},
		search: function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			
			Backbone.history.navigate('search/' + $("#q").val(), true); 
			return false;
		}
	});
});