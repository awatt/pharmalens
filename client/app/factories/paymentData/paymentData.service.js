'use strict';

angular.module('foglightApp')
  .factory('paymentData', function ($resource) {

    var paymentData = $resource('api/payments/FIPS/:FIPS/:program_year',
    {
      FIPS: '@FIPS', 
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var paymentDataByProfileID = $resource('api/payments/profile_ID/:profile_ID/:program_year',
    {
      profile_ID: '@profile_ID',
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    return {
      paymentData: paymentData,
      paymentDataByProfileID: paymentDataByProfileID
    };
  });
