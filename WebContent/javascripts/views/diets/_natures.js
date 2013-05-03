define([
  'jquery',
  'underscore', 
  'backbone', 
  'views/diets/_nature'
], function($, _, Backbone, NatureView) {
	return Backbone.View.extend({
		render: function() {
			var that = this;
			
			$("a:first", this.$el).tab("show");
			this.collection.forEach(function(nature) {
				var type = nature.typeFormated();
				
				var natureView = new NatureView({model: nature, collection: that.options.els});
				$('#nature'+type).append(natureView.render());
			});
		}
	});
});