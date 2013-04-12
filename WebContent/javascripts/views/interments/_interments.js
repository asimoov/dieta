define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'views/interments/_interment',
  'text!templates/interments/_interments.html'
], function($, _, Backbone, IntermentView, home) {
	var IntermentsView = Backbone.View.extend({
		el : 'section#center',
		render : function() {
			$(this.el).html(home);
			
			for(var i in this.collection.models) {
				var interment = this.collection.models[i];
				
				$("ul", this.el).append(IntermentView.initialize({model: interment, "selected": this.options.selected}));
			}
		}
	});

	var initialize = function(options) {
		var intermentsView = new IntermentsView(options);
		intermentsView.render();
	};

	return {
		initialize : initialize
	};
});