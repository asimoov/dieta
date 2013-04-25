define([
  'jquery',
  'underscore', 
  'backbone', 
  'bootstrap', 
  'bWysihtml5',
  'models/diet',
  'models/meal',
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
  'views/diets/_food',
  'views/diets/_meal',
  'views/diets/_nature',
  'views/diets/_nutrients',
  'text!templates/diets/new.html'
], function($, _, Backbone, Bootstrap, Wysihtml5, Diet, Meal, Patient, Period, Type, Meals, FoodView, MealView, NatureView, Nutrients, home) {
	var NewView = Backbone.View.extend({
		el: 'section#center',
		events: {
			"click #cancel":             "cancel",
			"change #weight":            "weight",
			"change #height":            "height",
			"change #companion":         "companion",
			"change #levelOfAssistance": "levelOfAssistance",
			"change #observation":       "observation"
		},
		collection: new Meals(),
		render: function() {
			$(this.el).html(_.template(home, {model: this.model, "foods": this.options.foods, "Diet": Diet, "Patient": Patient, "Period": Period, "Type": Type, "Meals": Meals}));
			
			var diets = this.model.get('patient').diets;
			var meals = new Meals(diets.length === 0 ? {} : diets[0].meals);
			var that = this;
			_.forEach(Period.periods, function(hour, index) {
	  			var meal = meals.byHour(hour)[0];
	  			if(meal === undefined || meal.length === 0) {
	  				meal = new Meal({"dish": {"period": hour, "nature": {"description": ""}}});
	  			}

	  			var mealView = new MealView({model: new Meal(meal.toJSON())});
	  			$(".meals-" + Math.round(index%3), this.el).append(mealView.render());
	  			that.collection.push(mealView);
  			});

			$("#natureTab a:first").tab("show");
			this.options.natures.forEach(function(nature) {
				var type = nature.typeFormated();
				$('#nature'+type).append(NatureView.initialize({model: nature, collection: that.collection}));
			});

			this.options.foods.forEach(function(food) {
				var type = food.typeFormated();
				$('#food' + type).append(FoodView.initialize({model: food, collection: that.collection}));
			});
			
			var nutrients = new Nutrients({collection: that.collection});
			nutrients.render();

			$("#observation").wysihtml5();
		},
		cancel: function() {
			Backbone.history.navigate('', true); 
		},
		weight: function(event) {
			this.model.set({"weight": $(event.target).val()});
		},
		height: function(event) {
			this.model.set({"height": $(event.target).val()});
		},
		companion: function(event) {
			this.model.set({"companion": $(event.target).val()});
		},
		levelOfAssistance: function(event) {
			this.model.set({"levelOfAssistance": $(event.target).val()});
		},
		observation: function(event) {
			this.model.set({"observation": $(event.target).val()});
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