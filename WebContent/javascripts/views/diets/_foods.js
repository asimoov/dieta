define([
  'jquery', 
  'underscore', 
  'backbone',  
  'views/diets/_food',
  'text!templates/diets/foods.html'
], function($,  _, Backbone, FoodView, home) {
	return Backbone.View.extend({
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			$("a:first", this.$el).tab("show");
			this.collection.each(function(food) {
				var type = food.typeFormated();
				
				var foodView = new FoodView({model: food, collection: this.options.els});
				$('#food' + type).append(foodView.render());
			}, this);
		}
	});
});