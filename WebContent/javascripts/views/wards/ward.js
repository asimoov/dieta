define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward',
  'text!templates/wards/ward.html'
], function($, _, Backbone, Ward, home) {
	return  Backbone.View.extend({
		tagName:  "li",
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		render : function() {
			return this.$el.append(_.template(home, {"ward": this.model}));
		},
		close: function() {
			this.remove();
		}
	});
});