'use strict';

angular.module('foglightApp')
  .factory('paymentData', function ($resource) {

    var paymentData = $resource('api/payments/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var paymentDataByProfileID = $resource('api/payments/profile_ID/:profile_ID', {profile_ID: '@profile_ID'}, {
      update: {
        method: 'PUT'
      }
    });

    return {
      paymentData: paymentData,
      paymentDataByProfileID: paymentDataByProfileID
    };
  });
