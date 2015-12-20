'use strict';

describe('Service: recipientNames', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var recipientNames;
  beforeEach(inject(function (_recipientNames_) {
    recipientNames = _recipientNames_;
  }));

  it('should do something', function () {
    expect(!!recipientNames).toBe(true);
  });

});
