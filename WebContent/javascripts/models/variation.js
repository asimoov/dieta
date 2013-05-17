define([
  'backbone',
  'models/food'
], function(Backbone, Food) {
	return Backbone.Model.extend({
		quantity: function(){
			return parseFloat(this.get('quantity'));
		},
		food: function() {
			return new Food(this.get('food'));
		}
	});
});
