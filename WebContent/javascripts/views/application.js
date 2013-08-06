define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'keymaster',
  'handlebars',
  'text!templates/application.html'
], function($, _, Backbone, Keymaster, Handlebars, home) {
	return Backbone.View.extend({
		template: _.template(home),
		events: {
			"submit #search":	"search"
		},
		initialize: function() {
			key('shift+q', function(){ window.location.href = "/dieta/j_spring_security_logout"; });
			key('shift+a', function(){ Backbone.history.navigate('', true);  });
		},
		render : function() {
			this.$el.append(this.template());
			
			return this.$el;
		},
		search: function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			
			Backbone.history.navigate('search/' + $("#q").val(), true); 
			return false;
		},
		close: function() {
			this.$el.unbind().empty();
		}
	});
});