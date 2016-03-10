'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http, $timeout, statService, grantData, paymentData, recipientTotals, recipientNames, drugTotals, locator, $mdDialog, payments, grants, totals) {

  $scope.countyName = '';
  $scope.bins = [];
  $scope.recipientNames;
  $scope.recipientStats;
  $scope.programYear = '2014';
  $scope.metric = 'per_capita';
  $scope.countyPaymentStats = payments.per_capita2014;
  $scope.countyGrantStats = grants.per_capita2014;
  $scope.countyTotalStats = totals.per_capita2014;
  $scope.physicianPaymentStats;
  $scope.physicianGrantStats;
  $scope.physicianTotalStats;
  $scope.drugPaymentStats;
  $scope.drugGrantStats;
  $scope.drugTotalStats;

  // $scope.runStats = function(arr){
  //   var top = 0, arr = arr.slice(0,10), docnum = arr.length, avg = 0;
  //   for (var i = 0, max = docnum; i<max; i++){
  //     top += arr[i].rate;
  //   }
  //   avg = top/docnum;
  //   console.log("avg ", avg + " top: ", top + " numdocs: ", docnum)
  // }

  $scope.physicianTopStats = {
    grants: {
      '2013': {
        top: 14022910.629999999,
        total: 57244553.180000186,
        num: 1770
      },
      '2014': {
        top: 18532901.270000003,
        total: 101514054.45000018,
        num: 1848
      }
    },
    payments: {
      '2013': {
        top: 2743070.34,
        total: 42153350.450003706,
        num: 84677
      },
      '2014': {
        top: 4794219.020000001,
        total: 114942571.53999986,
        num: 115705
      }
    },
    totals: {
      '2013': {
        top: 14805489.24,
        total: 99397903.63000128,
        num: 85352
      },
      '2014': {
        top: 19975678.090000004,
        total: 216456625.9900036,
        num: 116227
      }
    }
  }

  $scope.drugTopStats = { 
    grants: {
      '2013': {
        top: 35363046.27000002,
        total: 43803285.640000015,
        num: 83
      },
      '2014': {
        top: 57884002.75166666,
        total: 76793594.50999998,
        num: 110
      }
    },
    payments: {
      '2013': {
        top: 27911880.55900045,
        total: 36201855.68000049,
        num: 423
      },
      '2014': {
        top: 82535608.24833187,
        total: 104784850.15999866,
        num: 514
      }
    },
    totals: {
      '2013': {
        top: 58996214.27133396,
        total: 80005141.32000071,
        num: 446
      },
      '2014': {
        top: 124532291.93583061,
        total: 181578444.66999736,
        num: 542
      }
    }
  }
  

  $scope.countyTopStats = { 
    grants: {
      '2013': {
        top: 11234105.090000004,
        topPC: 2933.02419148287,
        total: 57244553.18000001,
        num: 476
      },
      '2014': {
        top: 15350263.669999998,
        topPC: 6667.5462612,
        total: 100467944.38999994,
        num: 460
      }
    },
    payments: {
      '2013': {
        top: 1170724.880000001,
        topPC: 1650.9673420819188,
        total: 42151131.11000026,
        num: 2558
      },
      '2014': {
        top: 1947497.8299999998,
        topPC: 5088.382967899999,
        total: 118611712.15,
        num: 2774
      }
    },
    totals: {
      '2013': {
        top: 13149874.49,
        topPC: 3361.343699393508,
        total: 99395684.28999971,
        num: 2559
      },
      '2014': {
        top: 18335468.33,
        topPC: 8551.784883510334,
        total: 217014309.10000032,
        num: 2849
      }
    }
  }


  $scope.test = 'false';
  $scope.runTest = function(){
  }

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

  //CHECKBOXES
   $scope.items = ['payments', 'grants'];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1){
          list.splice(idx, 1);
          if (list.length){
            $scope.dataSet = list[0]
          } else{
            $scope.dataSet = 'diabetes'
          }
        } else {
          list.push(item);
          if(list.length === 2){
            $scope.dataSet = 'totals';
          } else {
            $scope.dataSet = list[0];
          }
        }
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

  //PROGRESS CIRCULAR
  $scope.progress = true;

  $scope.hideProgress = function(){
    $scope.progress = false;
  }
  //PROGRESS CIRCULAR - END


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
          })
        });
      } else if ($scope.dataSet === 'grants'){
        recipientTotals.getGrantTotalsFIPS(FIPS, program_year).$promise.then(function(grantTotals){
          grantData.grantData.query({FIPS: FIPS, program_year: program_year}).$promise.then(function(grantData){
            $scope.bins = statService.formatData(grantData,grantTotals,$scope.recipientNames);
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
      });
    } else if ($scope.dataSet === 'grants'){
      grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(grantData){
        recipientStats[physician.profile_ID] = physician.totalGrants;
        recipientNames[physician.profile_ID] = physician.display;
        $scope.bins = statService.formatData(grantData,recipientStats, recipientNames);
      });
    } else {
      paymentData.paymentDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(paymentData){
        grantData.grantDataByProfileID.query({profile_ID: physician.profile_ID, program_year: program_year}).$promise.then(function(grantData){
          var totalData = paymentData.concat(grantData);
          recipientStats[physician.profile_ID] = physician.totalGrants + physician.totalPayments;
          recipientNames[physician.profile_ID] = physician.display;
          $scope.bins = statService.formatData(totalData,recipientStats, recipientNames);
        });
      });
    }
  };
  //DATA RETRIEVAL - END



  //MATERIAL DESIGN TABS CONTROL
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
  //MATERIAL DESIGN TABS CONTROL - END


  //INPUT SEARCH LOGIC
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
          recipientTotals.getPaymentTotalsFIPS(newFIPS, Number($scope.programYear)).$promise.then(function(paymentTotals){
            recipientTotals.getGrantTotalsFIPS(newFIPS, Number($scope.programYear)).$promise.then(function(grantTotals){             
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
//INPUT SEARCH LOGIC - END

//TOP STATS DATA SWITCHING
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
    console.log("$scope.countyPaymentStats")
    $scope.runStats($scope.countyPaymentStats)
    $scope.countyGrantStats = grants[$scope.metric + newVal];
    console.log("$scope.countyGrantStats")
    $scope.runStats($scope.countyGrantStats)
    $scope.countyTotalStats = totals[$scope.metric + newVal];
    console.log("$scope.countyTotalStats")
    $scope.runStats($scope.countyTotalStats)
  }
})

//DIALOG FUNCTIONS
$scope.showSankeyDialog = function(ev, FIPS, searchTerm, payments, grants) {
  //if no data for given county and dataset, show no data dialog
  if( ((payments === 0) && (grants === 0)) || ($scope.dataSet === 'payments' && (payments === 0)) || ($scope.dataSet === 'grants' && (grants === 0))  ){
     $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title($scope.programYear + ' results for that County: $0.00')
        .ariaLabel('')
        .ok('OK')
        .targetEvent(ev)
    );
  } else {
    $scope.setDataTitle();
    $scope.progress = true;
    $scope.bins = [];
    if(typeof searchTerm === "object" && searchTerm !== null){
      $scope.getStatsByPhysician(searchTerm, Number($scope.programYear));
    } else if (searchTerm === null) {

      $scope.countyName = $scope.counties[FIPS].name;
      $scope.getStatsByFIPS($scope.counties[FIPS].FIPS, Number($scope.programYear));
    } else {
      $scope.countyName = searchTerm;
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

$scope.showPhysicianPaymentStatsDialog = function(ev) {
  $scope.progress = true;
  recipientTotals.getPaymentTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.physicianPaymentStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
  })
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

$scope.showPhysicianGrantStatsDialog = function(ev) {
  $scope.progress = true;
  recipientTotals.getGrantTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.physicianGrantStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
  })
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

$scope.showPhysicianTotalStatsDialog = function(ev) {
  $scope.progress = true;
  recipientTotals.getTotalTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.physicianTotalStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
  })
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

$scope.showDrugGrantStatsDialog = function(ev) {
  $scope.progress = true;
  drugTotals.getDrugGrantTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.drugGrantStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
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

$scope.showDrugPaymentStatsDialog = function(ev) {
  $scope.progress = true;
  drugTotals.getDrugPaymentTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.drugPaymentStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
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

$scope.showDrugTotalStatsDialog = function(ev) {
  $scope.progress = true;
  drugTotals.getDrugTotalTotalsYear($scope.programYear).$promise.then(function(result){
    $scope.drugTotalStats = result;
    $scope.hideProgress();
    $scope.runStats(result);
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

//DIALOG FUNCTIONS - END


  }) //MainCtrl Close

//DIALOG CONTROLLER
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




