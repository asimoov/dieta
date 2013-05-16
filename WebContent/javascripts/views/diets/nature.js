define([
  'jquery',
  'underscore', 
  'backbone', 
  'jqueryui',
  'models/period',
  'models/type',
  'collections/meals', 
], function($, _, Backbone, jQueryUI, Period, Type) {
	return Backbone.View.extend({
		tagName: 'li',
		events: {
			"click":	"select"
		},
		render: function() {
			return this.$el.append("<a>" + this.model.get('description') + "</a>");
		},
		select: function() {
			var selecteds = this.options.view.selecteds();
			
			selecteds.forEach(function(view) {
				var model = view.model;
				var period = parseInt(model.get('dish').period, 10);
				var type = parseInt(this.model.get('type'), 10);

				if(_.contains(Period.periodsByType[type], period)) {
					model.get('dish').nature = this.model.toJSON();
					model.trigger("change");
				} else {
					view.$el.effect( "shake", {}, "fast" );
				}
			}, this);
		}
	});
});