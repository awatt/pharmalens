'use strict';

describe('Service: recipientStats', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var recipientStats;
  beforeEach(inject(function (_recipientStats_) {
    recipientStats = _recipientStats_;
  }));

  it('should do something', function () {
    expect(!!recipientStats).toBe(true);
  });

});
