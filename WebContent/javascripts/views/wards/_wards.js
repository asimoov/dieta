define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward', 
  'views/wards/_ward', 
  'text!templates/wards/_wards.html'
], function($, _, Backbone, Ward, WardView, home) {
	var WardsView = Backbone.View.extend({
		el: '.primary-sidebar',
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			this.collection.each(function(ward) {
				$("ul", this.el).append(WardView.initialize({model: ward}));
			}, this);
		},
	});

	var initialize = function(options) {
		var wardsView = new WardsView(options);
		wardsView.render();
	};

	return {
		initialize : initialize
	};
});