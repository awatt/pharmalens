'use strict';

angular.module('foglightApp')
  .factory('recipientTotals', function ($resource) {

    var recipientPaymentsTotalsFIPS = $resource('api/payments/FIPS/RecipientTotals/:FIPS/:program_year',
    {
      FIPS: '@FIPS', program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var recipientGrantsTotalsFIPS = $resource('api/grants/FIPS/RecipientTotals/:FIPS/:program_year',
    {
      FIPS: '@FIPS',
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var recipientTotalsYear = $resource('api/physicians/RecipientTotals/:program_year/:dataSet',
    {
      program_year: '@program_year',
      dataSet: '@dataSet'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    //SANKEY QUERIES
    var getPaymentTotalsFIPS = function(FIPS, program_year){
      return recipientPaymentsTotalsFIPS.get({FIPS: FIPS, program_year: program_year}, function(Totals){
        var TotalsMap = {};
        for (var key in Totals) {
          if (Totals.hasOwnProperty(key) && !isNaN(key)) {
            TotalsMap[Totals[key]._id] = Totals[key].value;
          }
        }
        return TotalsMap;
      })
    }

    var getGrantTotalsFIPS = function(FIPS, program_year){
      return recipientGrantsTotalsFIPS.get({FIPS: FIPS, program_year: program_year}, function(Totals){
        var TotalsMap = {};
        for (var key in Totals) {
          if (Totals.hasOwnProperty(key) && !isNaN(key)) {
            TotalsMap[Totals[key]._id] = Totals[key].value;
          }
        }
        return TotalsMap;
      })
    }

    //PHYSICIAN DIALOG QUERY & CACHE
    var getTotalsYear = function(dataSet, program_year){
      return recipientTotalsYear.query({program_year: program_year, dataSet: dataSet}, function(stats){
      })
    }
    getTotalsYear.cache = {};

      
    var runDashStats = function(dataArr,dataSet,year,topThreshold){
      //check for nested objects init
      dashStats[dataSet] = dashStats[dataSet] || {};
      dashStats[dataSet][year] = dashStats[dataSet][year] || {}; 
      
      var dashObj = dashStats[dataSet][year];

          // dataArr = dataInit.dataSet.year,
          dashObj['num'] = dataArr.length;

      for (var i = 0, max = dataArr.length; i < max; i++){
        if (i === topThreshold){
          dashObj['top'] = dashObj.total;
        };
        dashObj['total'] += dataArr[i].amount;
      }
    }
    
  //DASHBOARD STATE
    var dashStats = {
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

    return {
      getPaymentTotalsFIPS: getPaymentTotalsFIPS,
      getGrantTotalsFIPS: getGrantTotalsFIPS,
      getTotalsYear: getTotalsYear,
      dashStats: dashStats
    };
});
