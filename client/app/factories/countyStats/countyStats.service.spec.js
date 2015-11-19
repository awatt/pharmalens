'use strict';

describe('Service: countyStats', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var countyStats;
  beforeEach(inject(function (_countyStats_) {
    countyStats = _countyStats_;
  }));

  it('should do something', function () {
    expect(!!countyStats).toBe(true);
  });

});
