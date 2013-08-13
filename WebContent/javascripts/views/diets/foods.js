define([
  'jquery', 
  'underscore', 
  'backbone', 
  'models/type',
  'views/diets/food',
  'text!templates/diets/foods.html'
], function($,  _, Backbone, Type, FoodView, home) {
	return Backbone.View.extend({
		subviews: [],
		initialize: function() {
			this.listenTo(this.collection, 'reset', function() { this.close(); this.render(); });
		},
		render: function() {
			this.$el.append(home);
			
			$("a:first", this.$el).tab("show");
			var frags = new Array(document.createDocumentFragment(), document.createDocumentFragment(), document.createDocumentFragment());
			this.collection.each(function(food) {
				var type = food.type();
				
				var foodView = new FoodView({model: food, view: this.options.view});
				foodView.render();
				frags[type].appendChild(foodView.el);
				
				this.subviews.push(foodView);
			}, this);

			$('#foodSolído').append(frags[0]);
			$('#foodLiquído').append(frags[1]);
			$('#foodEnteral').append(frags[2]);
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.unbind().empty();
		}
	});
});