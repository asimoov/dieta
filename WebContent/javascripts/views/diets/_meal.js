define([
  'jquery', 
  'jquery-ui',
  'underscore', 
  'backbone', 
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
], function($, UI, _, Backbone) {
	var NewView = Backbone.View.extend({
		tagName: 'li',
		className: 'ui-widget-content', 
		render: function() {
			return $(this.el).text(this.model.get('dish').period + "h" + " (" + this.model.get('dish').nature.description + ")");
		}
	});

	var initialize = function(options) {
		var newView = new NewView(options);
		return newView.render();
	};

	return {
		initialize : initialize
	};
});