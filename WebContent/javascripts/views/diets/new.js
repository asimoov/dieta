define([
  'jquery',
  'underscore', 
  'backbone', 
  'models/diet',
  'models/meal',
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
  'views/diets/_foods',
  'views/diets/_meals',
  'views/diets/_natures',
  'views/diets/_nutrients',
  'text!templates/diets/new.html'
], function($, _, Backbone, Diet, Meal, Patient, Period, Type, Meals, FoodsView, MealsView, NaturesView, Nutrients, home) {
	return Backbone.View.extend({
		events: {
			"click #save":               "save",
			"click #cancel":             "cancel",
			"change #weight":            "weight",
			"change #height":            "height",
			"change #companion":         "companion",
			"change #levelOfAssistance": "levelOfAssistance",
			"change #observation":       "observation"
		},
		template: _.template(home),
		serialize: function() {
			return {"interment": this.options.interment, "foods": this.options.foods, "Diet": Diet, "Patient": Patient, "Period": Period, "Type": Type, "Meals": Meals};
		},
		render: function() {
			var interment = this.options.interment;
			var patient = interment.patient();
			var diets = patient.diets();
			var last = diets.first() || new Diet({"patient": patient.toJSON(), "meals": []});
			this.model = new Diet(last.toJSON());
			this.collection = this.model.meals();

			this.$el.empty();
			this.$el.append(this.template(this.serialize()));
			var mealsView = new MealsView({el: "#meals", "collection": this.collection});
			mealsView.render();

			var naturesView = new NaturesView({el: "#natures", collection: this.options.natures, view: mealsView});
			naturesView.render();

			var foodsView = new FoodsView({el: "#foods", collection: this.options.foods, view: mealsView});
			foodsView.render();
			
			var nutrients = new Nutrients({el: "#nutrients", collection: this.collection});
			nutrients.render();
		},
		save: function() {
			this.model.id;
		},
		cancel: function() {
			Backbone.history.navigate('', true); 
		},
		weight: function(event) {
			var weight = parseFloat($("#weight").val());
			var height = parseFloat($("#height").val());
	
			this.model.set({"weight": weight});
			
			if(weight != undefined && height != undefined) {
				var v = (weight / (height * height)).toFixed(2);
				$('#value-imc').text(v);
			}
		},
		height: function(event) {
			var weight = parseFloat($("#weight").val());
			var height = parseFloat($("#height").val());
			
			this.model.set({"height": height});
			
			if(weight != undefined && height != undefined) {
				var v = (weight / (height * height)).toFixed(2);
				$('#value-imc').text(v);
			}
		},
		companion: function(event) {
			this.model.set({"companion": $(event.target).val()});
		},
		levelOfAssistance: function(event) {
			this.model.set({"levelOfAssistance": $(event.target).val()});
		},
		observation: function(event) {
			this.model.set({"observation": $(event.target).val()});
		}
	});
});