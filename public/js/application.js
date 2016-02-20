'use strict';

module.exports = function() {
	var app = angular.module('app', ['ngResource', 'app.routes', 'app.controllers', 'app.services']);

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
	});
};