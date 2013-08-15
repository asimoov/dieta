require.config({
  paths: {
	jquery: 'vendor/jquery',
	underscore: 'vendor/underscore',
	backbone: 'vendor/backbone',
	"jquery-ui": 'vendor/jquery-ui',
	"jquery-gritter": 'vendor/jquery.gritter',
	fetchCache: 'vendor/backbone.fetch-cache',
	tab: 'vendor/bootstrap.tab',
	modernizr: 'vendor/modernizr',
	keymaster: 'vendor/keymaster',
	sinon: 'vendor/sinon',
	"jasmine-sinon": 'vendor/jasmine-sinon',
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
	tab: {
		deps: ["jquery"]
	},
	"jquery-ui": {
		deps: ["jquery"]
	},
	"jquery-gritter": {
		deps: ["jquery"]
	},
	"jasmine-sinon": {
		deps: ["sinon"]
	}
  }
});