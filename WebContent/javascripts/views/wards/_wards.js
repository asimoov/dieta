define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward', 
  'views/wards/_ward', 
  'text!../../templates/wards/_wards.html'
], function($, _, Backbone, Ward, WardView, home) {
	var WardsView = Backbone.View.extend({
		el: 'aside',
		render: function() {
			this.el.innerHTML = home;
			for(var i in this.collection.models) {
				var ward = this.collection.models[i];

				$("ul", this.el).append(WardView.initialize({model: ward}));
			}
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