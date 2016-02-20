module.exports = function() {
  var controller = {};
  var contacts = [
    { _id: 1, name: 'Contact One', email: 'one@cooh.com' },
    { _id: 2, name: 'Contact Two', email: 'two@cooh.com' },
    { _id: 3, name: 'Contact Three', email: 'three@cooh.com' }
  ];

  var save = function(contact) {
    contact._id = contacts.length + 1;
    contacts.push(contact);
  };

  var update = function(updated) {
    contacts = contacts.map(function(contact) {
      return contact._id == updated._id ? updated : contact;
    });
  };

  controller.saveOrUpdate = function(request, response) {
    var contact = request.body._id ? update(request.body) : save(request.body);
    response.json(contact);
  };

  controller.delete = function(request, response) {
    var _id = request.params.id;

    contacts = contacts.filter(function(contact) {
      return contact._id != _id;
    });

    response.status(204).end();
  };

  controller.list = function(request, response) {
    response.json(contacts);
  };

  controller.get = function(request, response) {
    var _id = request.params.id;
    var _contact = contacts.filter(function(contact) {
      return contact._id == _id;
    })[0];

    _contact ? response.json(_contact) : response.status(404).send('Not Found');
  };

  return controller;
};
