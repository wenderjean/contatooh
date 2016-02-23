var passport = require('passport');
var mongoose = require('mongoose');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {
	var User = mongoose.model('User');
	var Strategy = new GitHubStrategy({
		clientID: '6c20b32efbe213a92650',
		clientSecret: '36f5754f09f7b97fcdd4a31577a427ccd9ca678e',
		callbackURL: 'http://dev.contatooh.net:3000/auth/github/callback',
	}, function(accessToken, refreshToken, profile, done) {
		User.findOrCreate(
			{ "login" : profile.username },
			{ "name" : profile.username },
			function(err, user) {
				if(err) {
					console.error(err);
					return done(err);
				}
				return done(null, user);
			}
		);
	});

	passport.use(Strategy);

	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id).exec()
			.then(function(user) {
				done(null, user);
			});
	});
};