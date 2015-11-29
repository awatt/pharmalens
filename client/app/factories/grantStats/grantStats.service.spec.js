'use strict';

describe('Service: grantStats', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var grantStats;
  beforeEach(inject(function (_grantStats_) {
    grantStats = _grantStats_;
  }));

  it('should do something', function () {
    expect(!!grantStats).toBe(true);
  });

});
