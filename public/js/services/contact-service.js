'use strict';

var Contact = function ($resource) {
  return $resource('contacts/:_id');
};

module.exports = ['$resource', Contact];