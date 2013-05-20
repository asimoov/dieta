define([
  'backbone',
  'models/type'
], function(Backbone, Type) {
	"use strict";
	return Backbone.Model.extend({
		description: function() {
			return this.get('description');
		},
		typeFormated: function() {
			return Type[this.get('type')];
		},
		validate: function() {
			return this.get('description') !== undefined && this.get('type') !== undefined;
		}
	});
});
