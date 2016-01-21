'use strict';

angular.module('foglightApp')
  .factory('grantData', function ($resource) {

    var grantData = $resource('api/grants/FIPS/:FIPS/:program_year',
    {
      FIPS: '@FIPS',
      program_year: '@program_year'
    },
    {
      update: {
        method: 'PUT'
      }
    });

    var grantDataByProfileID = $resource('api/grants/profile_ID/:profile_ID/:program_year',
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
      grantData: grantData,
      grantDataByProfileID: grantDataByProfileID
    };
  });