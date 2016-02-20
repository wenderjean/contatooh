var express = require('express');
var load    = require('express-load');
var body_parser = require('body-parser');

module.exports = function() {
  var app = express();

  app.set('port', 3000);
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(body_parser.urlencoded({ extended: true }));
  app.use(body_parser.json());
  app.use(require('method-override')());

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
