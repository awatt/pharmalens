'use strict';

describe('Service: grants', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var grants;
  beforeEach(inject(function (_grants_) {
    grants = _grants_;
  }));

  it('should do something', function () {
    expect(!!grants).toBe(true);
  });

});
