'use strict';

angular.module('foglightApp')
  .factory('grantData', function ($resource) {

    var grantData = $resource('api/grants/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    var grantDataByProfileID = $resource('api/grants/profile_ID/:profile_ID', {profile_ID: '@profile_ID'}, {
      update: {
        method: 'PUT'
      }
    });

    return {
      grantData: grantData,
      grantDataByProfileID: grantDataByProfileID
    };
  });