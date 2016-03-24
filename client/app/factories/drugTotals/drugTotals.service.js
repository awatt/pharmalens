'use strict';

angular.module('foglightApp')
  .factory('drugTotals', function ($resource) {

    var drugTotalsYear = $resource('api/drugs/DrugTotals/:program_year/:dataSet',
    {
      program_year: '@program_year',
      dataSet: '@dataSet'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var getDrugTotalsYear = function(program_year,dataSet){
      return drugTotalsYear.query({program_year: program_year, dataSet: dataSet}, function(){
      })
    }

  //dashboard state
    var dashStats = { 
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

    return {
      getDrugTotalsYear: getDrugTotalsYear,
      dashStats: dashStats
    };
});
