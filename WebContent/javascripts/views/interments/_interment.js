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
			return this.$el.html(_.template(home, {"interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals}));
		}
	});
});