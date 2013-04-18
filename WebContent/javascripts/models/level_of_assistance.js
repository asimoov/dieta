define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  return {
	  byDay: function(level) {
		  if(level == 1 || level == 2) {
			  return 8;
		  } else if(level == 3) {
			  return 3;
		  } else if(level == 4) {
			  return 2;
		  } else if(level == 5) {
			  return 1;
		  }
	  }
  };
});