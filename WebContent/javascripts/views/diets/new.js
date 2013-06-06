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
  'views/alert',
  'views/diets/foods',
  'views/diets/meals',
  'views/diets/natures',
  'views/diets/nutrients',
  'text!templates/diets/new.html',
  'text!templates/diets/submit.params'
], function($, _, Backbone, Diet, Meal, Patient, Period, Type, Meals, Alert, FoodsView, MealsView, NaturesView, NutrientsView, home, submit) {
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
			var last = diets.first() || new Diet();

			this.model = new Diet(last.toJSON());
			this.model.set({"patient": patient.toJSON()});
			this.collection = this.model.meals();
			
			this.$el.append(this.template(this.serialize()));
			
			console.time("natures");
			var mealsView = this.makeMeals();
			this.subviews.push(mealsView);
			console.timeEnd("natures");
			
			console.time("natures");
			var naturesView = this.makeNaturesView(mealsView);
			this.subviews.push(naturesView);
			console.timeEnd("natures");

			console.time("foods");
			var foodsView = this.makeFoodsView(mealsView);
			this.subviews.push(foodsView);
			console.timeEnd("foods");
			
			console.time("nutrients");
			var nutrientsView = this.makeNutrientsView();
			this.subviews.push(nutrientsView);
			console.timeEnd("nutrients");
		},
		makeMeals: function() {
			var mealsView = new MealsView({el: "#meals", "collection": this.collection});
			mealsView.render();
			
			return mealsView;
		},
		makeNaturesView: function(mealsView) {
			var naturesView = new NaturesView({el: "#natures", collection: this.options.natures, view: mealsView});
			naturesView.render();
			
			return naturesView;
		},
		makeFoodsView: function(mealsView) {
			var foodsView = new FoodsView({el: "#foods", collection: this.options.foods, view: mealsView});
			foodsView.render();
			
			return foodsView;
		},
		makeNutrientsView: function() {
			var nutrientsView = new NutrientsView({el: "#nutrients", collection: this.collection});
			nutrientsView.render();
			
			return nutrientsView;
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
			$('#save').attr("disabled", "disabled");
			$('#cancel').attr("disabled", "disabled");
			
			var meals = new Meals(this.collection.filter(function(meal) {
				return meal.isValid();
			}));

			this.model.set({id: undefined, meals: meals.toJSON()});
			$.ajax({url: 'diets', type: 'POST', data: JSON.parse(_.template(submit, {model: this.model}))}).done($.proxy(function() {
				Backbone.fetchCache.clearItem(this.options.interment.url());
				Backbone.fetchCache.clearItem('interments?_format=json');
				Backbone.history.navigate('', true);
				Alert.success("Add com sucesso");
			}, this)).fail(function() {
				$('#save').removeAttr("disabled");
				$('#cancel').removeAttr("disabled");
			});
			
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
				var p = this.model.patient();
				p.set({diets:[this.model]});
				$('#imc').val(p.imc(0));
				$('#tmb').val(p.tmb(0));
				$('#get').val(p.ndc(0));
			}
		},
		height: function(event) {
			var weight = parseFloat($("#weight").val());
			var height = parseFloat($("#height").val());
			
			this.model.set({"height": height});
			
			if(weight !== undefined && height !== undefined) {
				var p = this.model.patient();
				p.set({diets:[this.model]});
				$('#imc').val(p.imc(0));
				$('#tmb').val(p.tmb(0));
				$('#get').val(p.ndc(0));
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