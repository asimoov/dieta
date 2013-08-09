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
			this.$el.append(home);
			
			console.time("interments");
			this.makeSelector();
			var frag = document.createDocumentFragment();
			this.collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, ward: this.options.ward, "selected": this.options.selected, root: this.options.root});
				intermentView.render();
				frag.appendChild(intermentView.el);

				this.subviews.push(intermentView);
			}, this);
			
			$("ul", this.$el).append(frag);
			console.timeEnd("interments");
		},
		makeSelector: function() {
			$("li.active").removeClass("active");
			
			if(this.options.ward !== undefined) {
				$("a[href^='#"+ this.options.ward.url() +"/interments']").parent().addClass("active");
			}
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.empty().unbind();
		}
	});
});