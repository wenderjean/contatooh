'use strict';

module.exports = function() {
	angular.module('app.controllers', [])
		.controller('ApplicationController', require('./controllers/application-controller'))
		.controller('AuthenticationController', require('./controllers/authentication-controller'))
		.controller('ContactControllerList', require('./controllers/contact-controller').list)
		.controller('ContactControllerForm', require('./controllers/contact-controller').form);
};