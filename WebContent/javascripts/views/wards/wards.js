define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/ward', 
  'views/wards/ward', 
  'text!templates/wards/wards.html'
], function($, _, Backbone, Ward, WardView, home) {
	"use strict";
	
	return Backbone.View.extend({
		subviews: [],
		initialize: function() {
			this.listenTo(this.collection, 'reset', function(){ this.close(); this.render(); } );
		},
		render: function() {
			this.$el.append(home);
			
			var frag = document.createDocumentFragment();
			this.collection.each(function(ward) {
				var wardView = new WardView({model: ward});
				wardView.render();
				
				frag.appendChild(wardView.el);
				this.subviews.push(wardView);
			}, this);
			
			$("ul", this.$el).append(frag);
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			
			this.subviews = [];
			this.$el.empty().unbind();
		}
	});
});