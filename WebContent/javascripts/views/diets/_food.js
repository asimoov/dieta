define([
  'jquery', 
  'underscore', 
  'backbone', 
  'jqueryui',
  'models/period',
  'models/type',
  'models/variation',
  'collections/variations', 
], function($,  _, Backbone, jQueryUI, Period, Type, Variation, Variations) {
	var FoodView = Backbone.View.extend({
		tagName: 'li',
		events: {
			"click":	"select"
		},
		render: function() {
			return $(this.el).html("<a>" + this.model.get('description') + "</a>");
		},
		select: function() {
			var that = this;
			var selecteds = this.collection.filter(function(view) {
				return $(view.get('el')).hasClass('selected');
			});
			
			selecteds.forEach(function(view) {
				var model = view.get('model');
				var period = parseInt(model.get('dish').period);
				var type = parseInt(that.model.get('type'));
				
				if(_.contains(Period.periodsByType[type], period)) {
					var variations = model.get('variations');
					var increment = parseFloat($("#value").val()) || 1;
					
					var variation = variations.find(function(variation) {
						return variation.get('food').id == that.model.id;
					});
					if (variation) {
						var quantity = parseFloat(variation.get("quantity"));
						variation.set({"quantity": quantity + increment});
					} else {
						variation = new Variation({"quantity": increment, "food": that.model.toJSON()});
						variations.add(variation);
					}
					
					model.set({"variations": variations});
					model.trigger("change");
					that.collection.trigger('add');
				} else {
					$(view.get('el')).effect( "shake", {}, "fast" );
				}
			});
		}
	});

	var initialize = function(options) {
		var foodView = new FoodView(options);
		return foodView.render();
	};

	return {
		initialize : initialize
	};
});