define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/patient', 
  'collections/interments', 
  'views/wards/_interment', 
  'text!../../templates/wards/_interments.html'
], function($, _, Backbone, Patient, Interments, IntermentView, home) {
	var IntermentsView = Backbone.View.extend({
		el : 'section#center',
		render : function() {
			$(this.el).html(home);
			
			var interments = new Interments(this.model.get('interments'));
			for(var i in interments.models) {
				var interment = interments.models[i];
				
				if(this.options.interment !== undefined && this.options.interment.id === interment.id) {
					$("ul", this.el).append(IntermentView.initialize({"model": this.model, "interment": interment, "selected": this.options.interment}));
				} else {
					$("ul", this.el).append(IntermentView.initialize({"model": this.model, "interment": interment}));
				}
			}
		},
	});

	var initialize = function(options) {
		var intermentsView = new IntermentsView(options);
		intermentsView.render();
	};

	return {
		initialize : initialize
	};
});