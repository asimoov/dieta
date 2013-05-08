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
		render : function() {
			this.$el.empty();
			return this.$el.append(_.template(home, {"q": this.options.q, "interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Period": Period, "Type": Type, "Ward": Ward, "Diets": Diets, "Meals": Meals}));
		}
	});
});