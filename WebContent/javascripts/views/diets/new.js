define([
  'jquery', 
  'jquery-ui',
  'underscore', 
  'backbone', 
  'models/meal',
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
  'views/diets/_meal', 
  'text!../../templates/diets/new.html'
], function($, UI, _, Backbone, Meal, Patient, Period, Type, Meals, MealView, home) {
	var NewView = Backbone.View.extend({
		el: 'section#center',
		collection: new Meals(),
		render: function() {
			$(this.el).html(_.template(home, {model: this.model, "natures": this.options.natures, "foods": this.options.foods, "Patient": Patient, "Period": Period, "Type": Type, "Meals": Meals}));
			$("#tabs").tabs();

			for(var i in Type) {
				var meals = new Meals(this.model.get('patient').diets[0].meals);
				var self = this;
				_.forEach(Period.periods[i], function(hour) {
		  			var meal = meals.byHourAndType(hour, i)[0];
		  			var mealView;
		  			if(meal !== undefined && meal.length !== 0) {
		  				mealView = MealView.initialize({model: meal});
		  				$("#selectable-" + i, this.el).append(mealView);
		  			} else {
		  				mealView = MealView.initialize({model: new Meal({"dish": {"period": hour, "nature": {"description": "+", "type": i}}})});
		  				$("#selectable-" + i, this.el).append(mealView);
		  			}

		  			self.collection.push(mealView);
	  			});
			}
			
			$(".selectable", this.el).selectable();
		}
	});

	var initialize = function(options) {
		var newView = new NewView(options);
		newView.render();
	};

	return {
		initialize : initialize
	};
});