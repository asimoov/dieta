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
  'text!../../templates/search/_interment.html'
], function($, _, Backbone, Dish, Nature, Patient, Ward, Diets, Meals, home) {
	var IntermentView = Backbone.View.extend({
		tagName:  "li",
		render : function() {
			return $(this.el).html(_.template(home, {"q": this.options.q, "interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals}));
		}
	});

	var initialize = function(options) {
		var intermentView = new IntermentView(options);
		return intermentView.render();
	};

	return {
		initialize : initialize
	};
});