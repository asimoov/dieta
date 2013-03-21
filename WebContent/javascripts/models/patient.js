define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  return Backbone.Model.extend({
	  age: function() {
		  var today = new Date();
	      var birthDate = new Date(Date.parse(this.get('bird')));
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
             age--;
          }
          return age;
      }
  });
});
