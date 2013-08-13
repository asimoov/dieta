define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/interment',
  'text!templates/interments/interments.html'
], function($, _, Backbone, IntermentView, home) {
	return Backbone.View.extend({
		subviews: [], 
		initialize: function() {
			if(this.options.ward !== undefined) {
				this.listenTo(this.options.ward, 'change', function() { this.close(); this.render(); });
			}
			
			if(this.collection !== undefined) {
				this.listenTo(this.collection, 'reset', function() { this.close(); this.render(); });
			}
		},
		render: function() {
			console.log("entrou");
			this.$el.append(home);
			
			this.makeSelector();
			var frag = document.createDocumentFragment();
			var collection = this.options.ward !== undefined ? this.options.ward.interments() : this.collection;
			collection.each(function(interment) {
				var intermentView = new IntermentView({model: interment, ward: this.options.ward, "selected": this.options.selected, root: this.options.root});
				intermentView.render();
				frag.appendChild(intermentView.el);

				this.subviews.push(intermentView);
			}, this);
			
			$("ul", this.$el).append(frag);
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