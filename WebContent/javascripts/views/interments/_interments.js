define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/_interment',
  'text!templates/interments/_interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		render : function() {
			this.$el.empty();
			this.$el.append(home);
			
			this.collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, "selected": this.options.selected});
				$("ul", this.$el).append(intermentView.render());
			}, this);
		}
	});
});