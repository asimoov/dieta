define([
  'jquery',
  'underscore',
  'backbone',
  'models/meal'
], function($, _, Backbone, Meal) {
  return Backbone.Collection.extend({
  	model: Meal
  });
});
