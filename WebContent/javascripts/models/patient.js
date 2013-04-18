define([
  'jquery',
  'underscore',
  'backbone',
  'models/level_of_assistance'
], function($, _, Backbone, LevelOfAssistance) {
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
      },
      isNeedAssistance: function() {
    	  var diets = this.get("diets");
    	  var last = _.max(diets, function(diet) {
    		  return new Date(diet.createdAt);
    	  });

    	  var date = new Date(last.createdAt);
    	  var now = new Date();
    	  var diff = Math.round((now - date)/1000/60/60/24);
    	  return (diff !== 0 && diff % LevelOfAssistance.byDay(last.levelOfAssistance) === 0);
      }
  });
});
