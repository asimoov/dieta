define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/dish',
  'models/nature',
  'models/patient',
  'models/period',
  'models/type',
  'models/ward', 
  'collections/diets',
  'collections/meals',
  'text!templates/search/_interment.html'
], function($, _, Backbone, Dish, Nature, Patient, Period, Type, Ward, Diets, Meals, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		serialize: function() {
			return {"q": this.options.q, "interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			this.$el.empty();
			return this.$el.append(this.template(this.serialize()));
		}
	});
});