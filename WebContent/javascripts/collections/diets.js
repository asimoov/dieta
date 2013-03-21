define([
  'jquery',
  'underscore',
  'backbone',
  'models/diet'
], function($, _, Backbone, Diet) {
  return Backbone.Collection.extend({
  	model: Diet
  });
});
