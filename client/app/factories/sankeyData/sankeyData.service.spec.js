'use strict';

describe('Service: sankeyData', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var sankeyData;
  beforeEach(inject(function (_sankeyData_) {
    sankeyData = _sankeyData_;
  }));

  it('should do something', function () {
    expect(!!sankeyData).toBe(true);
  });

});
