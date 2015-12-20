'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, paymentStats, locator) {

    $scope.countyfocus = 0;
    $scope.countyInfo = '';
    $scope.bins = [];
    $scope.isBins = {
        value: false
    };

    $scope.$watch("bins", function(newVal, oldVal){
        if(newVal.length){
            $scope.isBins.value = true;
        }
    })

    $('#sankeyModal').on('hidden.bs.modal', function (e) {
      $scope.isBins.value = false;
      $scope.bins = [];
    })

  //Angular Material Design - Input Dash - Test
    $scope.user = {
      state: 'CA',
      county: '',
      physician: ''
    };


    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      })

    $scope.counties = locator[$scope.user.state].map(function(county) {
          return {name: county.county};
        })

    $scope.$watch("user.state", function(newVal, oldVal){
      if(newVal !== oldVal){
        $scope.counties = locator[newVal].map(function(county) {
          return {name: county.county};
        })
      }
    })
    




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
