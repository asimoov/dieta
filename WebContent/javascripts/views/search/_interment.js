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
	var IntermentView = Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		render : function() {
			return $(this.el).html(_.template(home, {"q": this.options.q, "interment": this.model, "selected": this.options.selected, "Dish": Dish, "Nature": Nature, "Patient": Patient, "Period": Period, "Type": Type, "Ward": Ward, "Diets": Diets, "Meals": Meals}));
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