define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/dish',
  'models/nature',
  'models/patient',
  'collections/diets',
  'collections/meals',
  'text!templates/wards/_interment.html'
], function($, _, Backbone, Dish, Nature, Patient, Diets, Meals, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		serialize: function() {
			return {"ward": this.model, "interment": this.options.interment, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			this.$el.empty();
			return this.$el.append(this.template(this.serialize()));
		}
	});
});