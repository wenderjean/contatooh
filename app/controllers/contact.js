var sanitize = require('mongo-sanitize');

module.exports = function(app) {
  var controller = {};
  var Contact = app.models.contact;

  var save = function(contact, response) {
    Contact.find({ email: contact.email }).exec()
      .then(function(result) {
        if(result && result.length > 0) {
          response.status(500).json("This email has already been saved.");  
          return;
        }

        Contact.create(contact).then(function(returned) {
          response.status(201).json(returned);
        }, function(err) {
          console.error(err);
          response.status(500).json(err);
        });
    });
  };

  var update = function(updated, response) {
    Contact.findByIdAndUpdate(updated._id, updated).exec()
      .then(function(returned) {
        response.json(updated);
      }, function(err) {
        console.error(err);
        response.status(500).json(err);
      });
  };

  controller.saveOrUpdate = function(request, response) {
    request.body._id ? update(request.body, response) : save(request.body, response);
  };

  controller.delete = function(request, response) {
    var _id = { "_id": sanitize(request.params.id) };
    Contact.remove(_id).exec().then(function() { response.end(); }, function(err) { console.error(err); });
  };

  controller.list = function(request, response) {
    Contact.find()
      .populate('emergency')
      .exec()
      .then(function(contacts) {
        response.json(contacts); 
      }, function(err) {
        console.error(err);
        response.status(500).json(err);
      });
  };

  controller.get = function(request, response) {
    var _id = request.params.id;

    Contact.findById(_id).exec()
      .then(function(contact) {
        response.json(contact);
      }, function(err) {
        console.error(err);
        response.status(404).json(err);
      });
  };

  return controller;
};
