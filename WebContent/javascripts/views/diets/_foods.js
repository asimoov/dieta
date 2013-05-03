define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/diets/_food'
], function($,  _, Backbone, FoodView) {
	return Backbone.View.extend({
		render: function() {
			var that = this;
			
			this.collection.forEach(function(food) {
				var type = food.typeFormated();
				
				var foodView = new FoodView({model: food, collection: that.options.els});
				$('#food' + type).append(foodView.render());
			});
		}
	});
});