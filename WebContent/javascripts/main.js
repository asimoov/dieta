// Filename: main.js
// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  urlArgs: "bust=" +  (new Date()).getTime(),
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    fetchCache: 'vendor/backbone.fetch-cache',
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
  'config',
  'application'
  ], function(Config, Application) {
  // The "app" dependency is passed in as "App"
    Application.initialize();
});
