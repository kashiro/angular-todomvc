'use strict';

describe('Service: todoStorage', function () {

  // load the service's module
  beforeEach(module('angularTodomvcApp'));

  // instantiate service
  var todoStorage;
  beforeEach(inject(function (_todoStorage_) {
    todoStorage = _todoStorage_;
  }));

  it('should do something', function () {
    expect(!!todoStorage).toBe(true);
  });

});
