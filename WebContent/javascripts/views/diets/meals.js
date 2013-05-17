define([
  'jquery',
  'underscore', 
  'backbone',
  'models/meal',
  'models/period',
  'collections/meals',
  'views/diets/meal',
  'text!templates/diets/meals.html'
], function($, _, Backbone, Meal, Period, Meals, MealView, home) {
	return Backbone.View.extend({
		views: [],
		render: function() {
			this.$el.empty();
			this.$el.append(home);

			_.forEach(Period.periods, function(hour, index) {
				var meal = this.collection.find(function(meal) {
					var dish = meal.get('dish');
					return dish !== undefined && dish.period == hour;
				});

				if(meal === undefined || meal.length === 0) {
					meal = new Meal({"dish": {"period": hour}});
					this.collection.push(meal);
				}
				
				var mealView = new MealView({model: meal, collection: this.collection});
				this.views.push(mealView);
				$(".meals-" + Math.round(index%3), this.$el).append(mealView.render());
			}, this);
		},
		selecteds: function() {
			return this.views.filter(function(view) {
				return view.$el.hasClass('selected');
			});
		}
	});
});