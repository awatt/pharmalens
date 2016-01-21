'use strict';

angular.module('foglightApp')
  .factory('recipientTotals', function ($resource) {

    var recipientPaymentsTotals = $resource('api/payments/FIPS/RecipientTotals/:FIPS/:program_year',
    {
      FIPS: '@FIPS', program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var recipientGrantsTotals = $resource('api/grants/FIPS/RecipientTotals/:FIPS/:program_year',
    {
      FIPS: '@FIPS',
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var getPaymentTotals = function(FIPS, program_year){
      return recipientPaymentsTotals.get({FIPS: FIPS, program_year: program_year}, function(Totals){
        var TotalsMap = {};
        for (var key in Totals) {
          if (Totals.hasOwnProperty(key) && !isNaN(key)) {
            TotalsMap[Totals[key]._id] = Totals[key].value;
          }
        }
        return TotalsMap;
      })
    }

    var getGrantTotals = function(FIPS, program_year){
      return recipientGrantsTotals.get({FIPS: FIPS, program_year: program_year}, function(Totals){
        var TotalsMap = {};
        for (var key in Totals) {
          if (Totals.hasOwnProperty(key) && !isNaN(key)) {
            TotalsMap[Totals[key]._id] = Totals[key].value;
          }
        }
        return TotalsMap;
      })
    }

    return {
      getPaymentTotals: getPaymentTotals,
      getGrantTotals: getGrantTotals
    };
});
