'use strict';

module.exports = function() {
	angular.module('app.routes', ['ngRoute']).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
		$routeProvider
			.when('/', require('./routes/index').home)
			.when('/contacts', require('./routes/contact').list)
			.when('/contacts/new', require('./routes/contact').form)
			.when('/contacts/:id', require('./routes/contact').form)
			.otherwise({redirectTo: '/page-not-found'});
	}]);
};