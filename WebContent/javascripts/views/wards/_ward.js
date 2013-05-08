define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward',
  'text!templates/wards/_ward.html'
], function($, _, Backbone, Ward, home) {
	return  Backbone.View.extend({
		tagName:  "li",
		render : function() {
			this.$el.empty();
			return this.$el.append(_.template(home, {"ward": this.model}));
		}
	});
});