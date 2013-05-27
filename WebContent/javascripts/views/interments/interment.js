define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'handlebars',
  'models/interment',
  'models/nature',
  'models/patient',
  'models/ward',
  'collections/diets',
  'collections/meals',
  'views/selected',
  'text!templates/interments/interment.h.html'
], function($, _, Backbone, Handlebars, Interment, Nature, Patient, Ward, Diets, Meals, SelectedView, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: Handlebars.compile(home),
		serialize: function() {
			return {"interment": this.model, ward: this.options.ward, root: this.options.root, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			Handlebars.registerHelper('ifIsNulo', function(interment, options) {
				if (interment.isCurrent()) {
			        return options.fn(this);
			    } else {
			        return options.inverse(this);
			    }
			});
			
			Handlebars.registerHelper('ifIsNeedAssistance', function(interment, options) {
				var p = interment.patient();
				if (p.isNeedAssistance()) {
			        return options.fn();
			    } else {
			        return options.inverse();
			    }
			});

			Handlebars.registerHelper('name', function(interment) {
				return interment.patient().name();
			});

			Handlebars.registerHelper('description', function(interment) {
				var ward = this.ward !== undefined ? this.ward : this.interment.ward();
				return ward.description();
			});
			
			this.$el.empty();
			var serialize = this.serialize();
			this.$el.append(this.template(serialize));
			
			if (this.options.selected !== undefined && this.model.id === this.options.selected.id) {
				this.selectedView = new SelectedView({el: this.$el, model: this.options.selected});
				this.selectedView.render();
			}
			
			return this.$el;
		},
		close: function() {
			this.$el.unbind().empty();
			if(this.selectedView) {
				this.selectedView.close();
			}
		}
	});
});