define([
  'jquery',
  'underscore', 
  'backbone', 
  'jqueryui',
  'models/period',
  'models/type',
  'collections/meals', 
], function($, _, Backbone, jQueryUI, Period, Type) {
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
				var model = views.get('model');
				var period = parseInt(model.get('dish').period);
				var type = parseInt(my.model.get('type'));

				if(_.contains(Period.periodsByType[type], period)) {
					model.get('dish').nature = my.model.toJSON();
					views.attributes.render();
				} else {
					$(views.attributes.$el).effect( "shake", {}, "fast" );
				}
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