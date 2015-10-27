'use strict';

describe('Service: districts', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var districts;
  beforeEach(inject(function (_districts_) {
    districts = _districts_;
  }));

  it('should do something', function () {
    expect(!!districts).toBe(true);
  });

});
