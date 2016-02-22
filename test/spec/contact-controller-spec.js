describe('ContactControllerForm', function() {

	var $scope, $httpBackend;

	beforeEach(function() {
		module('app');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;

			$httpBackend.when('GET', 'contacts/1').respond(200, { _id: '1' });
			$httpBackend.when('GET', 'contacts').respond(200, [{}]);
		});
	});

	it('Should be create an empty contact if any route params exists', inject(function($controller) {
		$controller('ContactControllerForm', { "$scope" : $scope });
		expect($scope.contact._id).toBeUndefined();
	}));

	it('Should fill a contact if params exists', inject(function($controller) {
		$controller('ContactControllerForm', {
			'$routeParams': { id: 1 },
			'$scope': $scope
		});

		$httpBackend.flush();
		expect($scope.contact._id).toBeDefined();
	}));
});