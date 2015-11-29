'use strict';

angular.module('foglightApp')
  .factory('grantStats', function () {

    var grantStats = $resource('api/grants/FIPS/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    grantStats.getStatsByCounty = function(FIPS){
      console.log("this is FIPS inside the front-end call: ", FIPS)
      grantStats.get({FIPS: FIPS}), function(stats){
        //format stats for sankey chart
        console.log("this is stats return on the front end: ", stats)
      }
    }

    return grantStats;
  });