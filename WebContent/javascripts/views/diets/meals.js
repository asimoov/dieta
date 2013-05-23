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
		subviews: [],
		render: function() {
			this.$el.empty();
			this.$el.append(home);

			_.forEach(Period.periods, function(hour, index) {
				var meal = this.collection.byHour(hour);
				if(meal === undefined) {
					meal = new Meal({"period": hour});
					this.collection.push(meal);
				}
				
				var mealView = new MealView({model: meal, collection: this.collection});
				this.subviews.push(mealView);
				$(".meals-" + Math.round(index%3), this.$el).append(mealView.render());
			}, this);
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.unbind().empty();
		},
		selecteds: function() {
			return this.subviews.filter(function(subview) {
				return subview.$el.hasClass('selected');
			});
		}
	});
});