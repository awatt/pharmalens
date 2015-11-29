'use strict';

describe('Service: paymentStats', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var paymentStats;
  beforeEach(inject(function (_paymentStats_) {
    paymentStats = _paymentStats_;
  }));

  it('should do something', function () {
    expect(!!paymentStats).toBe(true);
  });

});
