define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/interment',
  'text!templates/interments/interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			this.collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, ward: this.options.ward, "selected": this.options.selected, root: this.options.root});
				$("ul", this.$el).append(intermentView.render());
			}, this);
		}
	});
});