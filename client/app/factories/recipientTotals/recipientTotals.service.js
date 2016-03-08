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

    var recipientPaymentsTotalsYear = $resource('api/physicians/RecipientPaymentTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var recipientGrantsTotalsYear = $resource('api/physicians/RecipientGrantTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var recipientTotalsTotalsYear = $resource('api/physicians/RecipientTotalTotals/:program_year',
    {
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

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

    var getPaymentTotalsYear = function(program_year){
      return recipientPaymentsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    var getGrantTotalsYear = function(program_year){
      return recipientGrantsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    var getTotalTotalsYear = function(program_year){
      return recipientTotalsTotalsYear.query({program_year: program_year}, function(Totals){
      })
    }

    return {
      getPaymentTotalsFIPS: getPaymentTotalsFIPS,
      getGrantTotalsFIPS: getGrantTotalsFIPS,
      getPaymentTotalsYear: getPaymentTotalsYear,
      getGrantTotalsYear: getGrantTotalsYear,
      getTotalTotalsYear: getTotalTotalsYear
    };
});
