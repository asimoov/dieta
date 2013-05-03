define([
  'jquery',
  'underscore',
  'backbone',
  'models/type',
], function($, _, Backbone, Type) {
	"use strict";
	return Backbone.Model.extend({
		typeFormated: function() {
			return Type[this.get('type')];
		}
	});
});
