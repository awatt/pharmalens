'use strict';

describe('Service: drugTotals', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var drugTotals;
  beforeEach(inject(function (_drugTotals_) {
    drugTotals = _drugTotals_;
  }));

  it('should do something', function () {
    expect(!!drugTotals).toBe(true);
  });

});
