require.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
	jquery: 'vendor/jquery',
	underscore: 'vendor/underscore',
	backbone: 'vendor/backbone',
	"jquery-ui": 'vendor/jquery-ui',
	"jquery-gritter": 'vendor/jquery.gritter',
	fetchCache: 'vendor/backbone.fetch-cache',
	tab: 'vendor/bootstrap.tab',
	handlebars: 'vendor/handlebars',
	modernizr: 'vendor/modernizr',
	keymaster: 'vendor/keymaster',
	templates: '../templates'
  },
  shim: {
	underscore: {
		exports: '_'
	},
	backbone: {
		deps: ["underscore", "jquery"],
		exports: "Backbone"
	},
	handlebars: {
		exports: 'Handlebars'
	},
	tab: {
		deps: ["jquery"]
	},
	"jquery-ui": {
		deps: ["jquery"]
	},
	"jquery-gritter": {
		deps: ["jquery"]
	}
  }
});

require([
  // Load our app module and pass it to our definition function
  'modernizr',
  'helpers/config',
  'application',
  'fetchCache',
  'tab',
  "jquery-gritter",
  "jquery-ui",
  'views/noComplatible'
  ], function(M, Config, Application, FetchCache, Tab, Gritter, UI, noComplatible) {
	"use strict";
	
	if (Modernizr.input.required && (Modernizr.flexbox || Modernizr.flexboxlegacy)) {
		Application.initialize();
	} else {
		noComplatible.initialize();
	}
});
