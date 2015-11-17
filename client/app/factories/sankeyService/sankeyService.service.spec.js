'use strict';

describe('Service: sankeyService', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var sankeyService;
  beforeEach(inject(function (_sankeyService_) {
    sankeyService = _sankeyService_;
  }));

  it('should do something', function () {
    expect(!!sankeyService).toBe(true);
  });

});
