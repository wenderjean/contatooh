var mongoose = require('mongoose');

module.exports = function() {
	var findOrCreate = require('mongoose-findorcreate');
	
	var schema = mongoose.Schema({
		login: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		name: {
			type: String,
			required: true
		},
		inclusion: {
			type: Date,
			default: Date.now
		}
	});

	schema.plugin(findOrCreate);
	return mongoose.model('User', schema);
};