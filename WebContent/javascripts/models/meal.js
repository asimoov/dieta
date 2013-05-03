define([
  'jquery',
  'underscore',
  'backbone',
  'collections/variations'
], function($, _, Backbone, Variations) {
	"use strict";
	return Backbone.Model.extend({
		initialize: function() {			
			this.set({"variations": new Variations(this.get("variations")) });
		}
	});
});
