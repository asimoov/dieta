define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/diets/_food',
  'text!templates/diets/foods.html'
], function($,  _, Backbone, FoodView, home) {
	return Backbone.View.extend({
		render: function() {
			var that = this;
			
			this.$el.html(home);
			//$("a:first", this.$el).tab("show");
			this.collection.forEach(function(food) {
				var type = food.typeFormated();
				
				var foodView = new FoodView({model: food, collection: that.options.els});
				$('#food' + type).append(foodView.render());
			});
		}
	});
});