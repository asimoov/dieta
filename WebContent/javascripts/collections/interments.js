define([
  'jquery',
  'underscore',
  'backbone',
  'models/interment'
], function($, _, Backbone, Interment) {
  return Backbone.Collection.extend({
  	url: 'interments?_format=json',
  	model: Interment
  });
});
