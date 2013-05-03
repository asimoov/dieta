define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/_interment',
  'text!templates/interments/_interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		render : function() {
			var that = this;
			this.$el.html(home);
			
			this.collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, "selected": that.options.selected});
				$("ul", that.$el).append(intermentView.render());
			});
		}
	});
});