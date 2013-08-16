define([ 
  'jquery', 
  'underscore', 
  'backbone', 
  'models/interment',
  'models/nature',
  'models/patient',
  'models/ward',
  'collections/diets',
  'collections/meals',
  'views/selected',
  'text!templates/interments/interment.html'
], function($, _, Backbone, Interment, Nature, Patient, Ward, Diets, Meals, SelectedView, home) {
	return Backbone.View.extend({
		tagName:  "li",
		className: "arrow-box-left gray",
		template: _.template(home),
		initialize: function() {
			this.listenTo(this.model, 'all', function() { this.close(); this.render(); } );

			if(this.options.selected !== undefined) {
				this.listenTo(this.options.selected, 'all', function() { this.close(); this.render(); });
			}
		},
		serialize: function() {
			return {"interment": this.model, ward: this.options.ward, root: this.options.root, "Nature": Nature, "Patient": Patient, "Ward": Ward, "Diets": Diets, "Meals": Meals};
		},
		render : function() {
			this.$el.append(this.template(this.serialize()));
			
			if (this.options.selected !== undefined && this.model.id === this.options.selected.id) {
				this.selectedView = new SelectedView({el: this.$el, model: this.options.selected});
				this.selectedView.render();
			}
			
			return this.$el;
		},
		close: function() {
			this.remove();
			if(this.selectedView) {
				this.selectedView.close();
			}
		}
	});
});