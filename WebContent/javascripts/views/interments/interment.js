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
  'views/selected',
  'text!templates/interments/interment.html'
], function($, _, Backbone, Handlebars, Dish, Nature, Patient, Ward, Diets, Meals, SelectedView, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		serialize: function() {
			return {"interment": this.model, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			this.$el.empty();
			this.$el.append(this.template(this.serialize()));
			
			var selectedView = new SelectedView({el: this.$el, model: this.options.selected, "interment": this.model});
			return selectedView.render();
		}
	});
});