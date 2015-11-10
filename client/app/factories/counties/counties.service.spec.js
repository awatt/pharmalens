'use strict';

describe('Service: counties', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var counties;
  beforeEach(inject(function (_counties_) {
    counties = _counties_;
  }));

  it('should do something', function () {
    expect(!!counties).toBe(true);
  });

});
