'use strict';

describe('Service: recipientTotals', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var recipientTotals;
  beforeEach(inject(function (_recipientTotals_) {
    recipientTotals = _recipientTotals_;
  }));

  it('should do something', function () {
    expect(!!recipientTotals).toBe(true);
  });

});
