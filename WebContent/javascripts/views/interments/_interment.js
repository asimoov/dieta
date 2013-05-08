define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/dish',
  'models/nature',
  'models/patient',
  'models/ward', 
  'collections/diets',
  'collections/meals',
  'text!templates/interments/_interment.html'
], function($, _, Backbone, Dish, Nature, Patient, Ward, Diets, Meals, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		render : function() {
			this.$el.empty();
			return this.$el.append(_.template(home, {"interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals}));
		}
	});
});