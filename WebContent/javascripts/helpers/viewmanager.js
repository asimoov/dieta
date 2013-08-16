define([ 
 'jquery', 
 'underscore', 
 'backbone' 
], function($, _, Backbone) {
	"use strict";

	var ViewManager = function() {
	};

	_.extend(ViewManager.prototype, {
		views : {},
		render: function(el, view) {
			var current = this.views[el];
			
			if(current !== undefined) {
				current.close();
				for(var key in this.views) {
					var v = this.views[key];
					if ($(v.$el.selector).length === 0) {
						v.close();
						v.remove();
						delete this.views[key];
						console.log("close");
					}
				}
			}

			this.views[el] = view;
			view.setElement(el);
			view.render();
		}
	});
	
	return new ViewManager();
});
