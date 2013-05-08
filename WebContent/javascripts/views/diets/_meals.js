define([
  'jquery',
  'underscore', 
  'backbone',
  'models/meal',
  'models/period',
  'collections/meals',
  'views/diets/_meal',
  'text!templates/diets/meals.html'
], function($, _, Backbone, Meal, Period, Meals, MealView, home) {
	return Backbone.View.extend({
		collection: new Meals(),
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			_.forEach(Period.periods, function(hour, index) {
	  			var meal = this.options.meals.byHour(hour)[0];
	  			if(meal === undefined || meal.length === 0) {
	  				meal = new Meal({"dish": {"period": hour, "nature": {"description": ""}}});
	  			}

	  			var mealView = new MealView({model: meal, collection: this.collection});
	  			$(".meals-" + Math.round(index%3), this.$el).append(mealView.render());
	  			this.collection.push(mealView);
			}, this);
		}
	});
});