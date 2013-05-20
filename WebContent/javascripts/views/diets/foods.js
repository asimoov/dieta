define([
  'jquery', 
  'underscore', 
  'backbone',  
  'views/diets/food',
  'text!templates/diets/foods.html'
], function($,  _, Backbone, FoodView, home) {
	return Backbone.View.extend({
		subviews: [],
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			$("a:first", this.$el).tab("show");
			this.collection.each(function(food) {
				var type = food.typeFormated();
				
				var foodView = new FoodView({model: food, view: this.options.view});
				$('#food' + type).append(foodView.render());
				this.subviews.push(foodView);
			}, this);
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.unbind().empty();
		}
	});
});