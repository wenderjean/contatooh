'use strict';

var ContactController = {
	list: function ($rootScope, $scope, Contact) {
		$rootScope.title = 'Contacts';

		var fill_list_of_contacts = function() {
			$scope.contacts = Contact.query();
		};

		(function() {
			fill_list_of_contacts();
		})();

		$scope.remove = function(contact) {
			alertify.confirm("Are you sure?",
			function() {
				var promise = Contact.delete({ _id: contact._id }).$promise;
				promise.then(fill_list_of_contacts);
			});
		};
	},
	form: function($rootScope, $scope, $routeParams, Contact) {
		$rootScope.title = 'New Contact';

		var _id = $routeParams.id;

		(function() {
			$scope.contact = new Contact();
			$scope.contacts = Contact.query();

			if(_id) {
				Contact.get({ _id: _id }, function(contact) {
					$scope.contact = contact;
				});
			}
		})();

		$scope.save = function() {
			$scope.contact.emergency == $scope.contact.emergency || null;
			$scope.contact.$save(function(contact, response) {
				alertify.success('Ok');
				$scope.contact = new Contact();
			}, function(response) {
				alertify.error(response.data);
			});
		};
	}
};

exports.list = ['$rootScope', '$scope', 'Contact', ContactController.list];
exports.form = ['$rootScope', '$scope', '$routeParams', 'Contact', ContactController.form];