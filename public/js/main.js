require('../vendor/angular');
require('../vendor/angular-route');
require('../vendor/angular-resource');
require('../vendor/angular-breadcrumb/dist/angular-breadcrumb');

$ = jQuery = require('../vendor/jquery/dist/jquery.min');
require('../vendor/bootstrap/dist/js/bootstrap.min');
alertify = require('../vendor/alertify.js/dist/js/alertify');

require('./routes')();
require('./controllers')();
require('./services')();
require('./interceptors')();
require('./application')();