'use strict';

var ApplicationController = function ($rootScope, $http) {
	$rootScope.title = 'Welcome to Contatooh';
	$http.get('/user/session')
		.then(function(response) {
			$rootScope.session = {
				exists: response.status === 200,
				user: response.data
			};
		});
};

module.exports = ['$rootScope', '$http', ApplicationController];