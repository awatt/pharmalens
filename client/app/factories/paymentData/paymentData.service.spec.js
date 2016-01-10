'use strict';

describe('Service: paymentData', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var paymentData;
  beforeEach(inject(function (_paymentData_) {
    paymentData = _paymentData_;
  }));

  it('should do something', function () {
    expect(!!paymentData).toBe(true);
  });

});
