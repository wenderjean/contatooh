'use strict';

module.exports = function() {
	angular.module('app.controllers', [])
		.controller('SiteController', require('./controllers/site-controller'))
		.controller('ContactControllerList', require('./controllers/contact-controller').list)
		.controller('ContactControllerForm', require('./controllers/contact-controller').form);
};