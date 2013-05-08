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
				var intermentView = new IntermentView({"q": this.options.q, model: interment, "selected": this.options.selected});
				$("ul", this.$el).append(intermentView.render());
			}, this);
		}
	});
});