define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward',
  'text!../../templates/wards/_ward.html'
], function($, _, Backbone, Ward, home) {
	var WardView =  Backbone.View.extend({
		tagName:  "li",
		render : function() {
			return $(this.el).html(_.template(home, {"ward": this.model}));
		}
	});
	
	var initialize = function(options) {
		var wardView = new WardView(options);
		return wardView.render();
	};
	
	return {
		initialize : initialize
	};
});