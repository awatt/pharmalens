'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, paymentStats, locator, recipientNames, $mdDialog) {

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


  //Angular Material Design - Input Dash - Test
    $scope.user = {
      state: 'AL',
      FIPS: '',
      physician: ''
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      })

    $scope.counties;
    $scope.physicians;

    $scope.$watch("user.state", function(newVal, oldVal){
      if(newVal !== oldVal){
        $scope.counties = locator[newVal].map(function(county) {
          return {name: county.county, FIPS: county.FIPS};
        }).sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          
          return 0;
        });
      }
    })

    $scope.$watch("user.FIPS", function(newVal, oldVal){
      if(newVal !== oldVal){

    recipientNames.query({FIPS: newVal}).$promise.then(function(physicians){

        console.log("this is physicians returned from back end: ", physicians)

        $scope.physicians = physicians.map( function (physician) {
          return {
            value: physician.value.toLowerCase(),
            display: physician.value,
            profile_ID: physician._id
          };
        }).sort(function (a, b) {
          if (a.value > b.value) {
            return 1;
          }
          if (a.value < b.value) {
            return -1;
          }
          
          return 0;
        });
      })
        
      }
    })


//MD Dialog 
    $scope.openDialog = function($event) {
      $mdDialog.show({
        controller: DialogCtrl,
        controllerAs: 'ctrl',
        templateURL: 'dialog.tmpl.html',
        // templateUrl: 'dialog.tmpl.html',
        locals: {
          states: $scope.states,
          counties: $scope.counties,
          physicians: $scope.physicians
        },
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
    }

//Angular Material Design Autocomplete
})

  function DialogCtrl ($scope, $mdDialog) {
    var self = this;
    // list of `state` value/display objects
    self.isDisabled = false;
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    function querySearch (query) {
      var results = query ? self.physicians.filter( createFilterFor(query) ) : self.physicians;
      return results;
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
    
    // ******************************
    // Template methods
    // ******************************
    self.cancel = function($event) {
      $mdDialog.cancel();
    };
    self.finish = function($event) {
      $mdDialog.hide();
    };
  } 


