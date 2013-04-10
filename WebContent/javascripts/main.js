require.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    fetchCache: 'vendor/backbone.fetch-cache',
    modernizr: 'vendor/modernizr.custom.20355',
    templates: '../templates',
    "jquery-ui": 'vendor/jquery-ui-1.10.2.custom'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    "jquery-ui": {
        exports: "$",
        deps: ['jquery']
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'modernizr',
  'config',
  'application',
  'views/noComplatible'
  ], function(M, Config, Application, noComplatible) {
	if (Modernizr.input.required && (Modernizr.flexbox || Modernizr.flexboxlegacy)) {
		Application.initialize();
	} else {
		noComplatible.initialize();
	}
});
