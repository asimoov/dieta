define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/nature', 
  'text!templates/diets/nature.html', 
], function($, _, Backbone, Nature, home) {
	return Backbone.View.extend({
		tagName: 'li',
		className: 'ui-widget-content', 
		events: {
			'click a': 'remove'
		},
		render: function() {
			return $(this.el).html(_.template(home, {"model": this.model}));
		},
		remove: function(ev) {
			this.model.get('dish').nature = (new Nature({description: '+'})).toJSON();
			this.render();
		}
	});
});