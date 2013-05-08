require.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    jqueryui: 'vendor/jquery-ui',
    fetchCache: 'vendor/backbone.fetch-cache',
    tab: 'vendor/bootstrap.tab',
    layoutmanager: 'vendor/backbone.layoutmanager',
    modernizr: 'vendor/modernizr',
    keymaster: 'vendor/keymaster',
    templates: '../templates'
  },

  shim: {
    underscore: {
      exports: '_',
      init: function () {
          return this._.noConflict();
      }
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
      init: function (module) {
    	  return this.Backbone.noConflict();
      }
    },
    tab: {
    	deps: ["jquery"]
    },
    layoutmanager: {
    	deps: ["backbone"]
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'modernizr',
  'config',
  'application',
  'tab',
  'views/noComplatible'
  ], function(M, Config, Application, Tab, noComplatible) {
	"use strict";
	
	if (Modernizr.input.required && (Modernizr.flexbox || Modernizr.flexboxlegacy)) {
		Application.initialize();
	} else {
		noComplatible.initialize();
	}
});
