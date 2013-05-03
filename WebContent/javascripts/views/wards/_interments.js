define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/patient', 
  'collections/interments', 
  'views/wards/_interment', 
  'text!templates/wards/_interments.html'
], function($, _, Backbone, Patient, Interments, IntermentView, home) {
	return Backbone.View.extend({
		render : function() {
			var that = this;
			this.$el.html(home);
			
			var interments = this.model.get('interments');
			interments.each(function(interment){
				$("ul", that.el).append(IntermentView.initialize({"model": that.model, "interment": interment, "selected": that.options.interment}));
			});
		},
	});
});