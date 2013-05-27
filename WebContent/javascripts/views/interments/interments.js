define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/interment',
  'text!templates/interments/interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		subviews: [], 
		render: function() {
			this.$el.empty();
			this.$el.append(home);
			
			console.time("interments");
			var frag = document.createDocumentFragment();
			this.collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, ward: this.options.ward, "selected": this.options.selected, root: this.options.root});
				frag.appendChild(intermentView.el);
				intermentView.render();

				this.subviews.push(intermentView);
			}, this);
			
			$("ul", this.$el).append(frag);
			console.timeEnd("interments");
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.empty().unbind();
		}
	});
});