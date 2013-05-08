define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/search/_interment',
  'text!templates/search/_interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		render : function() {
			this.$el.empty();
			this.$el.append(home);
			
			this.collection.each(function (interment) {				
				$("ul", this.$el).append(IntermentView.initialize({"q": this.options.q, model: interment, "selected": this.options.selected}));
			}, this);
		}
	});
});