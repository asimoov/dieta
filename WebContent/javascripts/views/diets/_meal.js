define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/nature',
  'collections/variations',
  'text!templates/diets/meal.html', 
], function($, _, Backbone, Nature, Variations, home) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'span2 action-nav-button',
		events: {
			'click span.label': 'remove',
			'click a':          'select'
		},
		initialize: function() {
			this.model.on('all', this.render, this);
		},
		render: function() {
			this.$el.empty();
			return this.$el.append(_.template(home, {"model": this.model}));
		},
		select: function() {
			$(this.el).toggleClass("selected");
		},
		remove: function(ev) {
			this.model.get('dish').nature = (new Nature({description: ''})).toJSON();
			this.model.set({"variations": []});
			
			this.model.trigger('changer');
			this.collection.trigger('remove');
		}
	});
});