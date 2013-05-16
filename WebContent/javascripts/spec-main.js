require.config({
  paths: {
	jquery: 'vendor/jquery',
	underscore: 'vendor/underscore',
	backbone: 'vendor/backbone',
	jqueryui: 'vendor/jquery-ui',
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
	}
  }
});