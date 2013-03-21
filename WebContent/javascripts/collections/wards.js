define([
  'jquery',
  'underscore',
  'backbone',
  'models/ward'
], function($, _, Backbone, Ward) {
  return Backbone.Collection.extend({
  	url: 'wards?_format=json',
  	model: Ward
  });
});
