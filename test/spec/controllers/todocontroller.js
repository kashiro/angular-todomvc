'use strict';

describe('Controller: TodocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTodomvcApp'));

  var TodocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodocontrollerCtrl = $controller('TodocontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
