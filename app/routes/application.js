module.exports = function(app) {
  var controller = app.controllers.application;
  app.get('/');
  app.get('/user/session', controller.get_user_session);
};
