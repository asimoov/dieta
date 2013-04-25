define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/nature', 
  'text!templates/diets/meal.html', 
], function($, _, Backbone, Nature, home) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'span2 action-nav-button', 
		events: {
			'click span.label': 'remove',
			'click a':          'select'
		},
		render: function() {
			return $(this.el).html(_.template(home, {"model": this.model}));
		},
		select: function() {
			$(this.el).toggleClass("selected");
		},
		remove: function(ev) {
			this.model.get('dish').nature = (new Nature({description: ''})).toJSON();
			this.model.set({"variations": []});
			this.render();
		}
	});
});