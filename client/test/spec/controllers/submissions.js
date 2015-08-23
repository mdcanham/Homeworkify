'use strict';

describe('Controller: SubmissionsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SubmissionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmissionsCtrl = $controller('SubmissionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubmissionsCtrl.awesomeThings.length).toBe(3);
  });
});
