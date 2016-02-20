module.exports = function() {
  var controller = {};
  controller.get_user_session = function(request, response) {
  	if(request.user) {
  		response.json({ username: request.user.login })
  	} else {
  		response.status(204).end();
  	}
  };
  return controller;
};
