'use strict';

describe('Service: diabetes', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var diabetes;
  beforeEach(inject(function (_diabetes_) {
    diabetes = _diabetes_;
  }));

  it('should do something', function () {
    expect(!!diabetes).toBe(true);
  });

});
