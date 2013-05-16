define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/dish',
  'models/nature',
  'models/patient',
  'collections/diets',
  'collections/meals',
  'views/selected',
  'text!templates/wards/interment.html'
], function($, _, Backbone, Dish, Nature, Patient, Diets, Meals, SelectedView, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		serialize: function() {
			return {"ward": this.model, "interment": this.options.interment, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			this.$el.empty();
			this.$el.append(this.template(this.serialize()));
			
			var selectedView = new SelectedView({el: this.$el, model: this.options.selected, "interment": this.options.interment});
			return selectedView.render();
		}
	});
});