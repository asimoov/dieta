define([
  'backbone',
  'models/type',
], function(Backbone, Type) {
	"use strict";
	return Backbone.Model.extend({
		description: function(){
			return this.get('description');
		},
		type: function(){
			return this.get('type');
		},
		typeFormated: function() {
			return Type[this.type()];
		}
	});
});
