'use strict';

module.exports = function() {
	var app = angular.module('app', [
		'ngResource', 
		'app.routes', 
		'app.controllers', 
		'app.services', 
		'app.interceptors'
	]);

	angular.element(document).ready(function () {
		app.config(function($routeProvider, $httpProvider) {
			$httpProvider.interceptors.push('AuthInterceptor');
		});
		angular.bootstrap(document, ['app']);
	});
};