define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/period',
  'models/type',
  'collections/meals', 
], function($, _, Backbone, Period, Type) {
	return Backbone.View.extend({
		tagName: 'li',
		events: {
			"click":	"select"
		},
		initialize: function() {
			this.listenTo(this.model, 'all', this.render);
		},
		render: function() {
			return this.$el.append("<a>" + this.model.get('description') + "</a>");
		},
		close: function() {
			this.remove();
		},
		select: function() {
			var selecteds = this.options.view.selecteds();
			
			selecteds.forEach(function(view) {
				var model = view.model;
				var period = parseInt(model.get('period'), 10);
				var type = parseInt(this.model.get('type'), 10);

				if(_.contains(Period.periodsByType[type], period)) {
					model.set({'nature': this.model.toJSON()});
					model.trigger("change");
				} else {
					view.$el.effect( "shake", {}, "fast" );
				}
			}, this);
		}
	});
});