define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward', 
  'views/wards/ward', 
  'text!templates/wards/wards.html'
], function($, _, Backbone, Ward, WardView, home) {
	return Backbone.View.extend({
		initialize: function() {
			this.listenTo(this.collection, 'reset', this.render);
		},
		render: function() {
			this.$el.append(home);
			
			this.collection.each(function(ward) {
				var wardView = new WardView({model: ward});
				$("ul", this.el).append(wardView.render());
			}, this);
		},
	});
});