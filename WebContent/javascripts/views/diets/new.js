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
  'views/diets/_nature',
  'text!../../templates/diets/new.html'
], function($, UI, _, Backbone, Meal, Patient, Period, Type, Meals, MealView, NatureView, home) {
	var NewView = Backbone.View.extend({
		el: 'section#center',
		collection: new Meals(),
		render: function() {
			$(this.el).html(_.template(home, {model: this.model, "foods": this.options.foods, "Patient": Patient, "Period": Period, "Type": Type, "Meals": Meals}));
			$("#tabs").tabs();
			
			var my = this;
			for(var i in Type) {
				var diets = this.model.get('patient').diets;
				
				var meals = new Meals(diets.length === 0 ? {} : diets[0].meals);	
				_.forEach(Period.periods[i], function(hour) {
		  			var meal = meals.byHourAndType(hour, i)[0];
		  			var mealView;
		  			if(meal !== undefined && meal.length !== 0) {
		  				mealView = new MealView({model: meal});
		  				$("#selectable-" + i, this.el).append(mealView.render());
		  			} else {
		  				mealView = new MealView({model: new Meal({"dish": {"period": hour, "nature": {"description": "+", "type": i}}})});
		  				$("#selectable-" + i, this.el).append(mealView.render());
		  			}

		  			my.collection.push(mealView);
	  			});

				this.options.natures.forEach(function(nature) {
					$('#tabs-' + i + ' #nature').append(NatureView.initialize({model: nature, collection: my.collection}));
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