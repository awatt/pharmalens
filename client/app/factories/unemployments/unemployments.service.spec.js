'use strict';

describe('Service: unemployments', function () {

  // load the service's module
  beforeEach(module('foglightApp'));

  // instantiate service
  var unemployments;
  beforeEach(inject(function (_unemployments_) {
    unemployments = _unemployments_;
  }));

  it('should do something', function () {
    expect(!!unemployments).toBe(true);
  });

});
