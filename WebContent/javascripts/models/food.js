define([
  'jquery',
  'underscore',
  'backbone',
  'models/type',
], function($, _, Backbone, Type) {
	"use strict";
	return Backbone.Model.extend({
		description: function(){
			return this.get('description');
		},
		typeFormated: function() {
			return Type[this.get('type')];
		}
	});
});
