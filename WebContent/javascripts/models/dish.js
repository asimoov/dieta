define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  return Backbone.Model.extend({
	  period: function() {
		  if (this.get('period') === "10") {
			  return "Almoço";
		  } else if (this.get('period') === "2") {
			  return "Desjejum";
		  } else if (this.get('period') === "3") {
			  return "Lanche";
		  }
	  }
  });
});
