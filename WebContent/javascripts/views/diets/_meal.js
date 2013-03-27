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
	return Backbone.View.extend({
		tagName: 'li',
		className: 'ui-widget-content', 
		render: function() {
			return $(this.el).text(this.model.get('dish').period + "h" + " (" + this.model.get('dish').nature.description + ")");
		}
	});
});