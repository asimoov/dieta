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
	var IntermentView = Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		render : function() {
			this.$el.empty();
			return this.$el.append(_.template(home, {"ward": this.model, "interment": this.options.interment, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Diets": Diets, "Meals": Meals}));
		},
	});

	var initialize = function(options) {
		var intermentView = new IntermentView(options);
		return intermentView.render();
	};

	return {
		initialize : initialize
	};
});