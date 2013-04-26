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
			var that = this;
			var selecteds = this.collection.filter(function(view) {
				return $(view.get('el')).hasClass('selected');
			});
			
			selecteds.forEach(function(view) {
				var model = view.get('model');
				var period = parseInt(model.get('dish').period);
				var type = parseInt(that.model.get('type'));

				if(_.contains(Period.periodsByType[type], period)) {
					model.get('dish').nature = that.model.toJSON();
					model.trigger("change");
					that.collection.trigger('add');
				} else {
					$(view.get('el')).effect( "shake", {}, "fast" );
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