'use strict';

module.exports = function () {
  angular.module('app.interceptors', [])
    .factory('AuthInterceptor', require('./interceptors/auth-interceptor'));
};