define([
  'jquery',
  'underscore', 
  'backbone', 
  'views/diets/nature',
  'text!templates/diets/natures.html'
], function($, _, Backbone, NatureView, home) {
	return Backbone.View.extend({
		render: function() {		
			this.$el.empty();
			this.$el.append(home);
			
			$("a:first", this.$el).tab("show");
			this.collection.forEach(function(nature) {
				var type = nature.typeFormated();
				
				var natureView = new NatureView({model: nature, view: this.options.view});
				$('#nature'+type).append(natureView.render());
			}, this);
		}
	});
});