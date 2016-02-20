module.exports = function(app) {
  var controller = app.controllers.contact;

  app.route('/contacts')
  	.get(controller.list)
  	.post(controller.saveOrUpdate);
  app.route('/contacts/:id')
  	.get(controller.get)
  	.delete(controller.delete);
};
