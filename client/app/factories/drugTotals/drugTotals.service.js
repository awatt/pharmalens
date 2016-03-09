'use strict';

angular.module('foglightApp')
  .factory('drugTotals', function ($resource) {

    var drugPaymentsTotalsYear = $resource('api/drugs/DrugPaymentTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var drugGrantsTotalsYear = $resource('api/drugs/DrugGrantTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var drugTotalsTotalsYear = $resource('api/drugs/DrugTotalTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var getDrugPaymentTotalsYear = function(program_year){
      return drugPaymentsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    var getDrugGrantTotalsYear = function(program_year){
      return drugGrantsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    var getDrugTotalTotalsYear = function(program_year){
      return drugTotalsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    return {
      getDrugPaymentTotalsYear: getDrugPaymentTotalsYear,
      getDrugGrantTotalsYear: getDrugGrantTotalsYear,
      getDrugTotalTotalsYear: getDrugTotalTotalsYear
    };
});
