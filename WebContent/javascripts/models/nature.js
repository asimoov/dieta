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
			var errors = new Array();
			if(this.get('description') === undefined) {
				errors.push("description is empty");
			}
			if(this.get('type') === undefined){
				errors.push("type is empty");
			}
			
			if(errors.length > 0) {
				return errors;
			}
		}
	});
});
