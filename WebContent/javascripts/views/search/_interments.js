define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/search/_interment',
  'text!templates/search/_interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		render : function() {
			var that = this;
			this.$el.html(home);
			
			this.collection.each(function (interment) {				
				$("ul", that.$el).append(IntermentView.initialize({"q": that.options.q, model: interment, "selected": that.options.selected}));
			});
		}
	});
});