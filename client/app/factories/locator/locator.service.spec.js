'use strict';

describe('Service: locator', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var locator;
  beforeEach(inject(function (_locator_) {
    locator = _locator_;
  }));

  it('should do something', function () {
    expect(!!locator).toBe(true);
  });

});
