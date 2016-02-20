module.exports = function(app) {
  var controller = app.controllers.contact;
  var isAuth = function(request, response, next) {
  	if (request.isAuthenticated()) {
  		return next();
  	} else {
  		response.status('401').json('Unauthorized');
  	}
  };

  app.route('/contacts')
  	.get(isAuth, controller.list)
  	.post(isAuth, controller.saveOrUpdate);
  app.route('/contacts/:id')
  	.get(isAuth, controller.get)
  	.delete(isAuth, controller.delete);
};
