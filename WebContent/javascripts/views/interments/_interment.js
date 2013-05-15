define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'handlebars',
  'models/dish',
  'models/nature',
  'models/patient',
  'models/ward',
  'collections/diets',
  'collections/meals',
  'text!templates/interments/_interment.html'
], function($, _, Backbone, Handlebars, Dish, Nature, Patient, Ward, Diets, Meals, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		serialize: function() {
			return {"interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			return this.$el.append(this.template(this.serialize()));
		}
	});
});