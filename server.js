var http = require('http');
var app  = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://192.168.33.20/contatooh');

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening at port ' + app.get('port'));
});
