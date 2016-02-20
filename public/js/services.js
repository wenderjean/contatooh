'use strict';

module.exports = function () {
  angular.module('app.services', [])
    .factory('Contact', require('./services/contact-service'));
};