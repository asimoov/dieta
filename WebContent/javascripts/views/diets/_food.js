define([
  'jquery', 
  'underscore', 
  'backbone', 
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
], function($,  _, Backbone) {
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
			
			selecteds.forEach(function(views) {
				var model = views.get('model');
				var variations = views.get('model').get('variations') || [];
				variations.push({"food": that.model.toJSON()});
				model.set({"variations": variations});
				
				views.attributes.render();
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