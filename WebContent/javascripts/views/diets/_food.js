define([
  'jquery', 
  'jquery-ui',
  'underscore', 
  'backbone', 
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
], function($, UI, _, Backbone) {
	var FoodView = Backbone.View.extend({
		tagName: 'span',
		events: {
			"click":	"select" 
		},
		render: function() {
			return $(this.el).text(this.model.get('description'));
		},
		select: function() {
			//var my = this;
			var selecteds = this.collection.filter(function(view) {
				return $(view.get('el')).hasClass('ui-selected');
			});
			
			selecteds.forEach(function(views) {
				//views.get('model').get('dish').nature = my.model.toJSON();
				//views.attributes.render();
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