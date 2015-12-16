'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, paymentStats) {

    $scope.countyfocus = 0;
    $scope.countyInfo = '';
    $scope.bins = [];
    
    // $scope.hasdata = {
    //   '0to500': false,
    //   '500to1k': false,
    //   '1to5k': false,
    //   '5to10k': false,
    //   '10to25k': false,
    //   '25to50k': false,
    //   '50to100k': false,
    //   '100to200k': false,
    //   'over200k': false
    // };

    $scope.isBins = {
        value: false
    };

    $scope.$watch("bins", function(newVal, oldVal){
        if(newVal.length){
            $scope.isBins.value = true;

            // $scope.eventTitle = $scope.days[0].eventTitle;
        }
    })

// $scope.$on('hidden.bs.modal',function(){
// console.log("hidden");
// });

$('#sankeyModal').on('hidden.bs.modal', function (e) {
  $scope.isBins.value = false;
  $scope.bins = [];
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
