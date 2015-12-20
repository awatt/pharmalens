'use strict';

angular.module('foglightApp')
  .factory('recipientStats', function ($resource) {

    var recipientStats = $resource('api/payments/FIPS/RecipientStats/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });
    return recipientStats;
  });
