'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http) {

    $scope.countyfocus = 0;
    
    $scope.hasdata = {
      '0to500': false,
      '500to1k': false,
      '1to5k': false,
      '5to10k': false,
      '10to25k': false,
      '25to50k': false,
      '50to100k': false,
      '100to200k': false,
      'over200k': false
    };

//Angular Material Design Tabs
  $scope.data = {
    selectedIndex: 0,
    bottom: true
  };
  $scope.next = function() {
    $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
  };
  $scope.previous = function() {
    $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
  };




})
