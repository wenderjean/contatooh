module.exports = function() {
  var controller = {};
  controller.index = function(request, response) {
    response.render('index', { name: 'Wender Freese' });
  };
  return controller;
};
