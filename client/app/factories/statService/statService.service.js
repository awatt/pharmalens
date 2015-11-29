'use strict';

angular.module('foglightApp')
  .factory('statService', function (paymentStats, grantStats, $q) {

var getCountyStats = function(FIPS){
  var statsDeferral = $q.defer();
  console.log(paymentStats.getStatsByCounty(FIPS))
  return statsDeferral.promise;
}

return {
  getCountyStats: getCountyStats
};
});