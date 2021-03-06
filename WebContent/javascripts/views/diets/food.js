define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/period',
  'models/type',
  'models/variation',
  'collections/variations', 
], function($,  _, Backbone, Period, Type, Variation, Variations) {
	return Backbone.View.extend({
		tagName: 'li',
		events: {
			"click":	"select"
		},
		initialize: function() {
			this.listenTo(this.model, 'all', this.render);
		},
		render: function() {
			var link = document.createElement("a");
			var text = document.createTextNode(this.model.get('description'));
			
			link.appendChild(text);
			return this.$el.append(link);
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
					var variations = model.variations();
					var increment = parseFloat($("#value").val()) || 1;
					
					var variation = variations.find(function(variation) {
						return variation.get('food').id == this.model.id;
					}, this);
					if (variation) {
						var quantity = variation.quantity();
						variation.set({"quantity": quantity + increment});
					} else {
						variation = new Variation({"quantity": increment, "food": this.model.toJSON()});
						variations.add(variation);
					}
					
					model.set({"variations": variations.toJSON()});
					model.trigger("change");
				} else {
					view.$el.effect( "shake", {}, "fast" );
				}
			}, this);
		}
	});
});