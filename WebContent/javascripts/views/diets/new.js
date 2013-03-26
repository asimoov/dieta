define([
  'jquery', 
  'jquery-ui',
  'underscore', 
  'backbone', 
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
  'text!../../templates/diets/new.html'
], function($, UI, _, Backbone, Patient, Period, Type, Meals, home) {
	var NewView = Backbone.View.extend({
		el: 'section#center',
		render : function() {
			$(this.el).html(_.template(home, {model: this.model, "natures": this.options.natures, "foods": this.options.foods, "Patient": Patient, "Period": Period, "Type": Type, "Meals": Meals}));
			$("#tabs").tabs();
			$("#selectable").selectable();
		}
	});

	var initialize = function(options) {
		var newView = new NewView(options);
		newView.render();
	};

	return {
		initialize : initialize
	};
});