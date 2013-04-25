define([
  'jquery',
  'underscore', 
  'backbone'
], function($, _, Backbone) {
	return Backbone.View.extend({
		el: '#nutrients',
		render: function() {
			$(this.el).html("");

			var nutris = {"calories": 0, "protein": 0, "lipids": 0, "carbohydrate": 0, "fibre": 0, "calcium": 0, "magnesium": 0,"manganese": 0,"phosphorus": 0,"iron": 0,"sodium": 0,"additionOfSodium": 0,"potassium": 0,"copper": 0,"zinc": 0,"selenium": 0,"retinol": 0,"a": 0,"b1": 0,"b2": 0,"b3": 0,"equivalentB3": 0,"b6": 0,"b12": 0,"folate": 0,"d": 0,"e": 0,"c": 0,"cholesterol": 0,"satturedFattyAcid": 0,"monounsaturatedFattyAcids": 0,"polyunsaturatedFattyAcids": 0,"linoleic": 0,"linolenic": 0,"transFattyAcidTotal": 0,"sugar": 0,"additionSugar": 0};
			this.collection.forEach(function(view) {
				var model = view.get('model');
				var variations = model.get('variations') || [];
				_.forEach(variations, function(variation) {
					for(var i in nutris) {
						var value = variation.food[i];
						nutris[i] += parseFloat(value);
					}
				});
			});
			
			for(var i in nutris) {
				$(this.el).append("<tr><td>"+i+"</td><td><b>"+nutris[i].toFixed(2)+"</b></td></tr>");
			};
		}
	});
});