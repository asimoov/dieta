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

			var intermentView = new IntermentView({model: interment});
			var mealsView = new MealsView({collection: this.collection});
			var naturesView = new NaturesView({collection: this.options.natures, view: mealsView});
			var foodsView = new FoodsView({collection: this.options.foods, view: mealsView});
			var nutrientsView = new NutrientsView({collection: this.collection});
			
			ViewManager.render("#interment", intermentView);
			ViewManager.render("#meals", mealsView);
			ViewManager.render("#natures", naturesView);
			ViewManager.render('#foods', foodsView);
			ViewManager.render('#nutrients', nutrientsView);
			
			this.subviews.push(intermentView);
			this.subviews.push(mealsView);
			this.subviews.push(naturesView);
			this.subviews.push(foodsView);
			this.subviews.push(nutrientsView);
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