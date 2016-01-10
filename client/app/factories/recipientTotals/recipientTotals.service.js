'use strict';

angular.module('foglightApp')
  .factory('recipientTotals', function ($resource) {

    var recipientPaymentsTotals = $resource('api/payments/FIPS/RecipientTotals/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var recipientGrantsTotals = $resource('api/grants/FIPS/RecipientTotals/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var getPaymentTotals = function(FIPS){
      return recipientPaymentsTotals.get({FIPS: FIPS}, function(Totals){
        var TotalsMap = {};
        for (var key in Totals) {
          if (Totals.hasOwnProperty(key) && !isNaN(key)) {
            TotalsMap[Totals[key]._id] = Totals[key].value;
          }
        }
        return TotalsMap;
      })
    }

    var getGrantTotals = function(FIPS){
      return recipientGrantsTotals.get({FIPS: FIPS}, function(Totals){
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
