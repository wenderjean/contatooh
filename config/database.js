var mongoose = require('mongoose');

module.exports = function(uri) {
	mongoose.connect(uri, { server: { poolSize: 15 }});
	mongoose.set( "debug", true);

	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Connected at ' + uri);
	});
	
	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose! Disconnected from ' + uri);
	});

	mongoose.connection.on('error', function(err) {
		console.log('Mongoose! Error during connection: ' + err);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Disconnected by application finish.');
		});
		process.exit(0);
	});
};