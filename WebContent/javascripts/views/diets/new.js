define([
  'jquery',
  'underscore', 
  'backbone', 
  'helpers/viewmanager',
  'models/diet',
  'models/meal',
  'models/patient',
  'models/period',
  'models/type',
  'collections/meals', 
  'views/alert',
  'views/diets/interment',
  'views/diets/foods',
  'views/diets/meals',
  'views/diets/natures',
  'views/diets/nutrients',
  'text!templates/diets/new.html',
  'text!templates/diets/submit.params'
], function($, _, Backbone, ViewManager, Diet, Meal, Patient, Period, Type, Meals, Alert, IntermentView, FoodsView, MealsView, NaturesView, NutrientsView, home, submit) {
	return Backbone.View.extend({
		events: {
			"submit #new":               "save",
			"click #cancel":             "cancel"
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
			
			var intermentView = this.makeInterment(interment);
			this.subviews.push(intermentView);
			
			var mealsView = this.makeMeals();
			this.subviews.push(mealsView);

			var naturesView = this.makeNaturesView(mealsView);
			this.subviews.push(naturesView);

			var foodsView = this.makeFoodsView(mealsView);
			this.subviews.push(foodsView);

			var nutrientsView = this.makeNutrientsView();
			this.subviews.push(nutrientsView);
		},
		makeInterment: function(interment) {
			var intermentView = new IntermentView({"model": interment});
			ViewManager.render("#interment", intermentView);
			
			return intermentView;
		},
		makeMeals: function() {
			var mealsView = new MealsView({"collection": this.collection});
			ViewManager.render("#meals", mealsView);
			
			return mealsView;
		},
		makeNaturesView: function(mealsView) {
			var naturesView = new NaturesView({collection: this.options.natures, view: mealsView});
			ViewManager.render("#natures", naturesView);
			
			return naturesView;
		},
		makeFoodsView: function(mealsView) {
			var foodsView = new FoodsView({collection: this.options.foods, view: mealsView});
			ViewManager.render('#foods', foodsView);
			
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
			this.$el.unbind().empty();
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
				//Clean all
				_.each(Backbone.fetchCache._cache, function(object, key){
					Backbone.fetchCache.clearItem(key);
				});
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
		}
	});
});