'use strict';

describe('Service: statService', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var statService;
  beforeEach(inject(function (_statService_) {
    statService = _statService_;
  }));

  it('should do something', function () {
    expect(!!statService).toBe(true);
  });

});
