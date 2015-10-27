'use strict';

describe('Directive: districtMap', function () {

  // load the directive's module
  beforeEach(module('foglightApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<district-map></district-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the districtMap directive');
  }));
});