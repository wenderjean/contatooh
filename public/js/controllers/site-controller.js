'use strict';

var SiteController = function ($rootScope) {
	$rootScope.title = 'Welcome to Contatooh';
};

module.exports = ['$rootScope', SiteController];
