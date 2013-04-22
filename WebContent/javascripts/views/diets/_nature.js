define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
], function($, _, Backbone) {
	var NatureView = Backbone.View.extend({
		tagName: 'li',
		events: {
			"click":	"select"
		},
		render: function() {
			return $(this.el).html("<a>" + this.model.get('description') + "</a>");
		},
		select: function() {
			var my = this;
			var selecteds = this.collection.filter(function(view) {
				return $(view.get('el')).hasClass('selected');
			});
			
			selecteds.forEach(function(views) {
				views.get('model').get('dish').nature = my.model.toJSON();
				views.attributes.render();
			});
		}
	});

	var initialize = function(options) {
		var natureView = new NatureView(options);
		return natureView.render();
	};

	return {
		initialize : initialize
	};
});