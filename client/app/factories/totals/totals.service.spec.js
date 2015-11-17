'use strict';

describe('Service: totals', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var totals;
  beforeEach(inject(function (_totals_) {
    totals = _totals_;
  }));

  it('should do something', function () {
    expect(!!totals).toBe(true);
  });

});
