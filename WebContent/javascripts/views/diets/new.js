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
  'views/diets/foods',
  'views/diets/meals',
  'views/diets/natures',
  'views/diets/nutrients',
  'text!templates/diets/new.html'
], function($, _, Backbone, Diet, Meal, Patient, Period, Type, Meals, FoodsView, MealsView, NaturesView, Nutrients, home) {
	return Backbone.View.extend({
		events: {
			"submit #new":               "save",
			"click #cancel":             "cancel",
			"change #weight":            "weight",
			"change #height":            "height",
			"change #companion":         "companion",
			"change #levelOfAssistance": "levelOfAssistance",
			"change #observation":       "observation"
		},
		subviews: [],
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
			
			this.$el.append(this.template(this.serialize()));
			var mealsView = new MealsView({el: "#meals", "collection": this.collection});
			mealsView.render();
			this.subviews.push(mealsView);
			
			var naturesView = new NaturesView({el: "#natures", collection: this.options.natures, view: mealsView});
			naturesView.render();
			this.subviews.push(naturesView);
			
			var foodsView = new FoodsView({el: "#foods", collection: this.options.foods, view: mealsView});
			foodsView.render();
			this.subviews.push(foodsView);
			
			var nutrients = new Nutrients({el: "#nutrients", collection: this.collection});
			nutrients.render();
			this.subviews.push(nutrients);
		},
		close: function() {
			_.forEach(this.subviews, function(subview){
				subview.close();
			});
			this.$el.empty();
		},
		save: function(event) {
			event.preventDefault();
			event.stopPropagation();
			   
			var meals = new Meals(this.collection.filter(function(meal) {
				return meal.isValid();
			}));
			
			this.model.set({id: undefined, meals: meals.toJSON()});
			return false;
		},
		cancel: function() {
			Backbone.history.navigate('', true); 
		},
		weight: function(event) {
			var weight = parseFloat($("#weight").val());
			var height = parseFloat($("#height").val());
	
			this.model.set({"weight": weight});
			
			if(weight !== undefined && height !== undefined) {
				var v = (weight / (height * height)).toFixed(2);
				$('#value-imc').text(v);
			}
		},
		height: function(event) {
			var weight = parseFloat($("#weight").val());
			var height = parseFloat($("#height").val());
			
			this.model.set({"height": height});
			
			if(weight !== undefined && height !== undefined) {
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