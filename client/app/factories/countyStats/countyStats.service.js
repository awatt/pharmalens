'use strict';

angular.module('foglightApp')
  .factory('countyStats', function ($resource) {

    var countyStats = $resource('api/countys/getCountyStats/:FIPS', {FIPS: '@FIPS'}, {
      update: {
        method: 'PUT'
      }
    });

    countyStats.getStats = function(FIPS){
      countyStats.get({FIPS: FIPS}), function(stats){
        //format stats for sankey chart
      }
    }

    return countyStats;
  });


// 'use strict';

// angular.module('doodleplusApp')
//   .factory('manageEvent', function ($resource) {
    
//     var manageEvent = $resource('api/events/manage/:adminURL', {adminURL: '@admin'}, {
//       update: {
//         method: 'PUT'
//       }
//     });

//     manageEvent.getEvent = function(admin, UUID, func) {
//       var oldResponses = [];
//       var username;
//       manageEvent.get({adminURL: admin}, function(thisEvent) {
//         manageEvent.event = thisEvent;
//         thisEvent.times.forEach(function(time) {
//           time.responses.forEach(function(response) {
//             if(response.UUID === UUID) {
//               username = response.username;
//               oldResponses.push(response);
//               time.status = response.status;
//               time[response.status] = true;
//             }
//           })
//         });
//         if(func) {
//           func(thisEvent, username, oldResponses);
//         }
//       });
//     };

//     return manageEvent;
//   });
