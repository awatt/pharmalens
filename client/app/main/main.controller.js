'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, $timeout, statService, grantData, paymentData, recipientTotals, recipientNames, locator, $mdDialog) {

  $scope.countyName = '';
  $scope.bins = [];
  $scope.progress = true;
  $scope.recipientNames;
  $scope.recipientStats;

  $scope.hideProgress = function(){
    $scope.progress = false;
  }

  $scope.getStatsByFIPS = function(FIPS){
    recipientNames.get({FIPS: FIPS}, function(recipientNames){
      $scope.recipientNames = recipientNames;
    }).$promise
    .then(function(){
      if ($scope.dataSet === 'payments'){
        recipientTotals.getPaymentTotals(FIPS).$promise.then(function(paymentTotals){
          paymentData.paymentData.query({FIPS: FIPS}).$promise.then(function(paymentData){
            $scope.bins = statService.formatData(paymentData,paymentTotals,$scope.recipientNames);
          })
        });
      } else if ($scope.dataSet === 'grants'){
        recipientTotals.getGrantTotals(FIPS).$promise.then(function(grantTotals){
          grantData.grantData.query({FIPS: FIPS}).$promise.then(function(grantData){
            $scope.bins = statService.formatData(grantData,grantTotals,$scope.recipientNames);
          })
        });
      } else {
        recipientTotals.getPaymentTotals(FIPS).$promise.then(function(paymentTotals){
          recipientTotals.getGrantTotals(FIPS).$promise.then(function(grantTotals){
            paymentData.paymentData.query({FIPS: FIPS}).$promise.then(function(paymentData){
              grantData.grantData.query({FIPS: FIPS}).$promise.then(function(grantData){
                var totalData = paymentData.concat(grantData);
                var totalTotals = paymentTotals;
                for (var key in grantTotals) {
                  if (grantTotals.hasOwnProperty(key) && !isNaN(key)) {
                    if(totalTotals[key] === undefined){
                      totalTotals[key] = grantTotals[key];
                    } else {
                      totalTotals[key] += grantTotals[key];
                    }
                  }
                }
                $scope.bins = statService.formatData(totalData,totalTotals,$scope.recipientNames);
              })
            })
          })
        });
      }
    });
  }


$scope.getStatsByPhysician = function(physician){

  paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID}).$promise.then(function(stats){
    var recipientStats = {};
    var recipientNames = {};
    recipientStats[physician.profile_ID] = physician.totalPayments;
    recipientNames[physician.profile_ID] = physician.display;
    $scope.bins = paymentStats.paymentStats.formatData(stats,recipientStats, recipientNames);
  })
}

  $scope.getStatsByPhysician = function(physician){
    var recipientStats = {};
    var recipientNames = {};
    if ($scope.dataSet === 'payments'){
      paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID}).$promise.then(function(paymentData){
        recipientStats[physician.profile_ID] = physician.totalPayments;
        recipientNames[physician.profile_ID] = physician.display;
        $scope.bins = statService.formatData(paymentData,recipientStats, recipientNames);
      });
    } else if ($scope.dataSet === 'grants'){
      grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID}).$promise.then(function(grantData){
        recipientStats[physician.profile_ID] = physician.totalGrants;
        recipientNames[physician.profile_ID] = physician.display;
        $scope.bins = statService.formatData(grantData,recipientStats, recipientNames);
      });
    } else {
      paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID}).$promise.then(function(paymentData){
        grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID}).$promise.then(function(grantData){
          var totalData = paymentData.concat(grantData);
          recipientStats[physician.profile_ID] = physician.totalGrants + physician.totalPayments;
          recipientNames[physician.profile_ID] = physician.display;
          $scope.bins = statService.formatData(totalData,recipientStats, recipientNames);
        });
      });
    }
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


  //Angular Material Design - Input Dash - Test
  $scope.user = {
    state: 'AL',
    county: -1,
    physician: ''
  };


  $scope.states;
  $scope.counties;
  $scope.physicians;

  $scope.loadStates = function(){
    if ($scope.states === undefined){
      $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
          return {abbrev: state};
        })
      }
    }

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
        console.log("$scope.counties: ", $scope.counties)
      }
    })

    $scope.$watch("user.county", function(newVal, oldVal){
      if(newVal !== oldVal){
        
        var newFIPS = $scope.counties[newVal].FIPS;
        $scope.countyName = $scope.counties[newVal].name;
        
        var getValue = function(val){
          if (!val){
            return 0;
          };
          return val;
        }
        
        recipientNames.get({FIPS: newFIPS}, function(physicianNames){
          $scope.physicianNames = physicianNames;
        }).$promise
        .then(function(){
          recipientTotals.getPaymentTotals(newFIPS).$promise.then(function(paymentTotals){
            recipientTotals.getGrantTotals(newFIPS).$promise.then(function(grantTotals){
              
              var physiciansMap = [];
              for (var key in $scope.physicianNames) {
                if ($scope.physicianNames.hasOwnProperty(key) && !isNaN(key) && (paymentTotals[key] || grantTotals[key])) {
                  var physician = {
                    value: $scope.physicianNames[key].toLowerCase(),
                    display: $scope.physicianNames[key],
                    profile_ID: key,
                    totalPayments: getValue(paymentTotals[key]),
                    totalGrants: getValue(grantTotals[key])
                  };
                  physiciansMap.push(physician);
                }
              }
              console.log("physiciansMap: ", physiciansMap)
              $scope.physicians = physiciansMap.sort(function (a, b) {
                if (a.value > b.value) {
                  return 1;
                }
                if (a.value < b.value) {
                  return -1;
                }
                return 0;
              });

            })
        });
      }); 


    }
  });


$scope.isDisabled = false;

$scope.querySearch = function (query) {
  var results = query ? $scope.physicians.filter( createFilterFor(query) ) : $scope.physicians;
  return results;
}

function createFilterFor(query) {
  var lowercaseQuery = angular.lowercase(query);
  return function filterFn(state) {
    return (state.value.indexOf(lowercaseQuery) === 0);
  };
}

$scope.showTabDialog = function(ev, FIPS, searchTerm) {
  $scope.progress = true;
  $scope.bins = [];

  if(FIPS === undefined){
    $scope.getStatsByPhysician(searchTerm);
  } else {
    $scope.countyName = searchTerm;
    $scope.getStatsByFIPS(FIPS);
  }

  $mdDialog.show({
    controller: TabDialogController,
    templateUrl: 'app/main/tabDialog.tmpl.html',
    scope: $scope,        
    preserveScope: true,
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true
  })
  .then(function(answer) {
    $scope.status = 'You said the information was "' + answer + '".';
  }, function() {
    $scope.status = 'You cancelled the dialog.';
  });
};

    //display switching
    $scope.dataSetSwitches = {
      diabetes: true,
      payments: false,
      grants: false
    };
    $scope.dataSet = '';
    $scope.message = 'false';
    $scope.onChange = function(cbState) {
      $scope.message = cbState;
    };

    $scope.selectDataSet = function(){
      $timeout(function(){ 
        var selected = $scope.dataSetSwitches;
        if(selected.payments && !selected.grants){
          $scope.dataSet = 'payments'
          selected.diabetes = false;
        } else if(!selected.payments && selected.grants){
          $scope.dataSet = 'grants'
          selected.diabetes = false;
        } else if(selected.payments && selected.grants){
          $scope.dataSet = 'totals'
          selected.diabetes = false;
        } else if(!selected.payments && !selected.grants){
          $scope.dataSet = 'diabetes'
          selected.diabetes = true;
        } 
      }, 0);
    }

  })

//sankeyDialog controller
function TabDialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}




