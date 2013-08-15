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
			
			if(current) {
				current.close();
				delete this.views[el];
			}

			this.views[el] = view;
			view.setElement(el);
			view.render();
		}
	});
	
	return new ViewManager();
});
