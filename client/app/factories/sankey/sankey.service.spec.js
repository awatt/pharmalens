'use strict';

describe('Service: sankey', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var sankey;
  beforeEach(inject(function (_sankey_) {
    sankey = _sankey_;
  }));

  it('should do something', function () {
    expect(!!sankey).toBe(true);
  });

});
