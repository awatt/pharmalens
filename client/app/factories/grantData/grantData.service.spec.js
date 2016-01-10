'use strict';

describe('Service: grantData', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var grantData;
  beforeEach(inject(function (_grantData_) {
    grantData = _grantData_;
  }));

  it('should do something', function () {
    expect(!!grantData).toBe(true);
  });

});
