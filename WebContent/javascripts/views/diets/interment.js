define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/diet',
  'text!templates/diets/interment.html',
], function($,  _, Backbone, Diet, home) {
	return Backbone.View.extend({
		template: _.template(home),
		serialize: function() {
			return {"model": this.model, "Diet": Diet};
		},
		events: {
			"change #weight":            "weight",
			"change #height":            "height",
			"change #companion":         "companion",
			"change #levelOfAssistance": "levelOfAssistance",
			"change #observation":       "observation"
		},
		initialize: function() {
			this.listenTo(this.model, 'all', function() { this.close(); this.render(); });
		},
		render: function() {
			this.$el.append(this.template(this.serialize()));
		},
		close: function() {
			this.$el.unbind().empty();
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