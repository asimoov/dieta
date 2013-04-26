define([
  'jquery',
  'underscore',
  'backbone',
  'models/variation',
  'collections/variations'
], function($, _, Backbone, Variation, Variations) {
  return Backbone.Model.extend({
	  initialize: function() {
		  var variations = new Variations();
		  _.forEach(this.get("variations"), function(variation) {
			  variations.add(new Variation(variation));
		  });

		  this.set({"variations": variations});
	  }
  });
});
