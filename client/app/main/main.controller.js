'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, $timeout, statService, grantData, paymentData, recipientTotals, recipientNames, drugTotals, locator, $mdDialog, $mdToast, payments, grants, totals) {

  $scope.countyName = '';
  $scope.bins = [];
  $scope.recipientNames;
  $scope.recipientStats;
  $scope.programYear = '2014';
  $scope.metric = 'per_capita';
  $scope.statsLimit = 200;
  $scope.topStatsThreshold = 10;
  $scope.countyPaymentStats = payments.per_capita2014;
  $scope.countyGrantStats = grants.per_capita2014;
  $scope.countyTotalStats = totals.per_capita2014;
  $scope.physicianStats;
  $scope.drugStats;
  $scope.gMap;
  $scope.pMap;
  $scope.physicianTopStats = recipientTotals.dashStats;
  $scope.drugTopStats = drugTotals.dashStats;
  $scope.countyTopStats = totals.dashStats;

  // $scope.test = 'false';
  // $scope.runTest = function(){
  // }

//DATASET SWITCHING
  $scope.dataSet = 'diabetes';
  $scope.dataTitle;
  $scope.setDataTitle = function(){
    if ($scope.dataSet === 'diabetes' || $scope.dataSet === 'totals'){
      $scope.dataTitle = 'Payments & Grants';
    } else {
      $scope.dataTitle = $scope.dataSet.substring(0,1).toUpperCase() + $scope.dataSet.substring(1);
    }
  }
  $scope.message = 'false';
  $scope.onChange = function(cbState) {
    $scope.message = cbState;
  };

//PROGRESS CIRCULAR
  $scope.progress = true;

  $scope.hideProgress = function(){
    $scope.progress = false;
  }

//DATA RETRIEVAL 
  $scope.getStatsByFIPS = function(FIPS, program_year){
    recipientNames.get({FIPS: FIPS, program_year: program_year}, function(recipientNames){
      $scope.recipientNames = recipientNames;
    }).$promise
    .then(function(){
      if ($scope.dataSet === 'payments'){
        recipientTotals.getPaymentTotalsFIPS(FIPS, program_year).$promise.then(function(paymentTotals){
          paymentData.paymentData.query({FIPS: FIPS, program_year: program_year}).$promise.then(function(paymentData){
            $scope.bins = statService.formatData(paymentData,paymentTotals,$scope.recipientNames);
            $scope.hideProgress();
          })
        });
      } else if ($scope.dataSet === 'grants'){
        recipientTotals.getGrantTotalsFIPS(FIPS, program_year).$promise.then(function(grantTotals){
          grantData.grantData.query({FIPS: FIPS, program_year: program_year}).$promise.then(function(grantData){
            $scope.bins = statService.formatData(grantData,grantTotals,$scope.recipientNames);
            $scope.hideProgress();
          })
        });
      } else {
        recipientTotals.getPaymentTotalsFIPS(FIPS, program_year).$promise.then(function(paymentTotals){
          recipientTotals.getGrantTotalsFIPS(FIPS, program_year).$promise.then(function(grantTotals){
            paymentData.paymentData.query({FIPS: FIPS, program_year: program_year}).$promise.then(function(paymentData){
              grantData.grantData.query({FIPS: FIPS, program_year: program_year}).$promise.then(function(grantData){
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
                $scope.hideProgress();
              })
            })
          })
        });
      }
    });
  }

  $scope.getStatsByPhysician = function(physician, program_year){
    var recipientStats = {};
    var recipientNames = {};
    if ($scope.dataSet === 'payments'){
      paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(paymentData){
        recipientStats[physician.profile_ID] = physician.totalPayments;
        recipientNames[physician.profile_ID] = physician.display;
        $scope.bins = statService.formatData(paymentData,recipientStats, recipientNames);
        $scope.hideProgress();
      });
    } else if ($scope.dataSet === 'grants'){
      grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(grantData){
        recipientStats[physician.profile_ID] = physician.totalGrants;
        recipientNames[physician.profile_ID] = physician.display;
        $scope.bins = statService.formatData(grantData,recipientStats, recipientNames);
        $scope.hideProgress();
      });
    } else {
      paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(paymentData){
        grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(grantData){
          var totalData = paymentData.concat(grantData);
          recipientStats[physician.profile_ID] = physician.totalGrants + physician.totalPayments;
          recipientNames[physician.profile_ID] = physician.display;
          $scope.bins = statService.formatData(totalData,recipientStats, recipientNames);
          $scope.hideProgress();
        });
      });
    }
  };

//MATERIAL DESIGN MENUS CONTROL
var originatorEv;
$scope.openMenu = function($mdOpenMenu, ev) {
  originatorEv = ev;
  $mdOpenMenu(ev);
};

$scope.setYear = function(value){
  $scope.programYear = value;
}

$scope.setMetric = function(value){
  $scope.metric = value;
}

$scope.setDataSet = function(value){
  $scope.dataSet = value;
}

//INPUT SEARCH LOGIC
  $scope.user = {
    state: 'AR',
    county: -1,
    physician: ''
  };

  $scope.states;
  $scope.counties;
  $scope.physicians;

  $scope.clearFields = function(){
    $scope.states = $scope.counties = $scope.physicians = $scope.searchText = (function(){ return undefined; })();
    $scope.user.county = -1;
    $scope.user.physician = '';
    $scope.user.state = 'AR';
  }

  $scope.loadStates = function(){
    if ($scope.states === undefined){
      $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
          return {abbrev: state};
        })
      }
    }

  var formatCounty = function(county){
    var arr = county.split(' '), lastWord = arr[arr.length - 1];
    if (lastWord === 'County'){
      return county.slice(0, county.length - 6);
    }
    return county;
  }

  $scope.$watch("user.state", function(newVal, oldVal){
    if(newVal !== oldVal){
      $scope.counties = locator[newVal].map(function(county) {
        return {name: formatCounty(county.county), FIPS: county.FIPS};
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

  //update selected county in search dropdown
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
    
    //grab new county physician names and individual grant and payment stats for query search dropdown  
    recipientNames.get({FIPS: newFIPS}, function(physicianNames){
      $scope.physicianNames = physicianNames;
      }).$promise
        .then(function(){
          recipientTotals.getPaymentTotalsFIPS(newFIPS, Number($scope.programYear)).$promise.then(function(paymentTotals){
            recipientTotals.getGrantTotalsFIPS(newFIPS, Number($scope.programYear)).$promise.then(function(grantTotals){             
              var physiciansMap = [];
              for (var key in $scope.physicianNames) {
                if ($scope.physicianNames.hasOwnProperty(key) && !isNaN(key) && (paymentTotals[key] || grantTotals[key])) {
                  var physician = {
                    value: $scope.physicianNames[key].toLowerCase(),
                    display: $scope.physicianNames[key],
                    profile_ID: Number(key),
                    FIPS: newFIPS,
                    totalPayments: getValue(paymentTotals[key]),
                    totalGrants: getValue(grantTotals[key])
                  };
                  physiciansMap.push(physician);
                }
              }
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

  //filter physician names by user entered char-search
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

  //TOP RECIPIENT STATS DATA SWITCHING
  $scope.$watch("metric", function(newVal, oldVal){
    if(newVal !== oldVal){
      $scope.countyPaymentStats = payments[newVal + $scope.programYear];
      $scope.countyGrantStats = grants[newVal + $scope.programYear];
      $scope.countyTotalStats = totals[newVal + $scope.programYear];
    }
  })

  $scope.$watch("programYear", function(newVal, oldVal){
    if(newVal !== oldVal){
      $scope.countyPaymentStats = payments[$scope.metric + newVal];
      $scope.countyGrantStats = grants[$scope.metric + newVal];
      $scope.countyTotalStats = totals[$scope.metric + newVal];
    }
  })

  //DIALOG FUNCTIONS
  var openToast = function() {
    $mdToast.show({
      hideDelay   : 2000,
      position    : 'top right',
      capsule: true,
      highlightClass: 'md-warn',
      controller  : toastController,
      parent : angular.element('#countyMap'),
      templateUrl : 'app/main/toast.html'
    });
  };

  $scope.showSankeyDialog = function(ev, FIPS, searchTerm, payments, grants, state) {

    //if no data for given county and dataset, display $0.00 data toast alert
    if( ((payments === 0) && (grants === 0)) 
      || ($scope.dataSet === 'payments' && (payments === 0 || (searchTerm === null && !$scope.pMap.get($scope.counties[FIPS].FIPS).number))) 
      || ($scope.dataSet === 'grants' && (grants === 0 || (searchTerm === null && !$scope.gMap.get($scope.counties[FIPS].FIPS).number)))  ){

      openToast();

    } else {
      $scope.setDataTitle();
      $scope.progress = true;
      $scope.bins = [];

      //if query is for physician data launched from top physicians dialog
      if(FIPS === 'topDoc'){

        //reset object to comply with other physician sankey request object format
        if($scope.dataSet === 'grants'){
          searchTerm['totalGrants'] = searchTerm.amount;
          searchTerm['totalPayments'] = 0;
        } else {
          searchTerm['totalGrants'] = 0;
          searchTerm['totalPayments'] = searchTerm.amount;
        }

        searchTerm['display'] = searchTerm.last_name + ', ' + searchTerm.first_name;

        //grab county display name from locator service
        var county = (function(){
          var arr = locator[searchTerm.state], match;
          for (var i = 0, max = arr.length; i < max; i++){
            if (arr[i].FIPS === searchTerm.FIPS){
              match = arr[i].county;
            }
          }
          return match;
        })();

        $scope.countyName = county + ', ' + searchTerm.state;
        $scope.getStatsByPhysician(searchTerm, Number($scope.programYear));

      //stats procedure if user query is for physician data from search dialog
      } else if (typeof searchTerm === "object" && searchTerm !== null){

        $scope.countyName = $scope.counties[FIPS].name + ', ' + state;
        $scope.getStatsByPhysician(searchTerm, Number($scope.programYear));
        $scope.clearFields();
      
      //stats procedure if user query is for county data from search dialog
      } else if (searchTerm === null) {
        $scope.countyName = $scope.counties[FIPS].name + ', ' + state;
        $scope.getStatsByFIPS($scope.counties[FIPS].FIPS, Number($scope.programYear));
        $scope.clearFields();
      
      //map click or top counties dialog county query
      } else {
         if(state){
          $scope.countyName = searchTerm + ', ' + state;        
         } else {
          $scope.countyName = searchTerm;
         }
        $scope.getStatsByFIPS(FIPS, Number($scope.programYear));
      }

      $mdDialog.show({
        controller: dialogController,
        templateUrl: 'app/main/sankeyDialog.html',
        scope: $scope,        
        preserveScope: true,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    }
  };

  $scope.showPhysicianSearchDialog = function(ev) {
  $scope.searchText = '';
  $scope.selectedItem = undefined;
  $scope.user.state = '';
  $scope.user.county = -1;

    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/main/physicianSearchDialog.html',
      scope: $scope,        
      preserveScope: true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };

  $scope.showInfoDialog = function(ev) {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/main/infoDialog.html',
      scope: $scope,        
      preserveScope: true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };

  $scope.showCountyStatsDialog = function(ev) {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/main/countyStatsDialog.html',
      scope: $scope,        
      preserveScope: true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };

  $scope.showPhysicianStatsDialog = function(ev) {

    //launch progress circular
    $scope.progress = true;

    //format cashe object for inspection
    recipientTotals.getTotalsYear.cache[$scope.dataSet] = recipientTotals.getTotalsYear.cache[$scope.dataSet] || {};

    //check data cache in factory
    if (!recipientTotals.getTotalsYear.cache[$scope.dataSet][$scope.programYear]){

      //pull data from backend if not already cached - factory stores in cache
      recipientTotals.getTotalsYear($scope.dataSet, $scope.programYear).$promise
      .then(function(result){
        recipientTotals.getTotalsYear.cache[$scope.dataSet][$scope.programYear] = result;
        $scope.physicianStats = result.slice(0,$scope.statsLimit);
        $scope.hideProgress();
      })
    } else {
      $scope.physicianStats = recipientTotals.getTotalsYear.cache[$scope.dataSet][$scope.programYear].slice(0,$scope.statsLimit);
      $scope.hideProgress();
    }
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/main/physicianStatsDialog.html',
      scope: $scope,        
      preserveScope: true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };

  $scope.showDrugStatsDialog = function(ev) {
    $scope.progress = true;

    drugTotals.getDrugTotalsYear($scope.programYear,$scope.dataSet).$promise.then(function(result){
      $scope.drugStats = result;
      $scope.hideProgress();
    })
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/main/drugStatsDialog.html',
      scope: $scope,        
      preserveScope: true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };
})

//dialog controller
function dialogController($scope, $mdDialog) {
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

dialogController.$inject = ['$scope', '$mdDialog'];

angular.module('pharmalensApp')
.controller( 'dialogController', dialogController );

//toast controller
function toastController ($scope, $mdToast) {
  $scope.closeToast = function() {
    $mdToast.hide()
  };
};

toastController.$inject = ['$scope', '$mdToast'];

angular.module('pharmalensApp')
.controller( 'toastController', toastController );



