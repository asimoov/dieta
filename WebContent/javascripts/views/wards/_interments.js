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
			this.$el.empty();
			this.$el.append(home);
			
			var interments = this.model.interments();
			interments.each(function(interment){
				var intermentView = new IntermentView({"model": this.model, "interment": interment, "selected": this.options.interment});
				$("ul", this.$el).append(intermentView.render());
			}, this);
		},
	});
});