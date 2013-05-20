define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/dish',
  'models/nature',
  'collections/variations',
  'text!templates/diets/meal.html', 
], function($, _, Backbone, Dish, Nature, Variations, home) {
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
		template: _.template(home),
		serialize: function() {
			return {"model": this.model, "Dish": Dish};
		},
		render: function() {
			this.$el.empty();
			return this.$el.append(this.template(this.serialize()));
		},
		close: function() {
			this.$el.unbind().empty();
		},
		select: function() {
			$(this.el).toggleClass("selected");
		},
		remove: function(ev) {
			this.model.get('dish').nature = (new Nature()).toJSON();
			this.model.set({"variations": []});
			
			this.model.trigger('changer');
			this.collection.trigger('remove');
		}
	});
});