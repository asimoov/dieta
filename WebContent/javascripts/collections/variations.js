define([
  'jquery',
  'underscore',
  'backbone',
  'models/variation'
], function($, _, Backbone, Variation) {
  return Backbone.Collection.extend({
  	model: Variation
  });
});
