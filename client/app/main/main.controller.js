'use strict';

angular.module('foglightApp')
.controller('MainCtrl', function ($scope, $http) {

    $scope.countyfocus = 0;

    // $scope.showDialog = showDialog;
    // $scope.items = [1, 2, 3];

    // function showDialog(ev) {
    //     var parentEl = angular.element("#testDiv");
    //     $mdDialog.show({
    //       controller: 'MainCtrl',
    //       template:
    //        '<md-dialog aria-label="List dialog">' +
    //        '  <md-dialog-content>'+
    //        // '  TESTING'+
    //        '    <div id="countySankey"></div>'+
    //        // '      <div county-sankey countyfocus="{{ countyfocus }}"></div>'+
    //        '  </md-dialog-content>' +
    //        '</md-dialog>',
    //       parent: parentEl,
    //       locals: {
    //        items: $scope.items
    //      },
    //       targetEvent: ev,
    //       clickOutsideToClose:true
    //   })
    //   //   .then(function(answer) {
    //   //     $scope.status = 'You said the information was "' + answer + '".';
    //   // }, function() {
    //   //     $scope.status = 'You cancelled the dialog.';
    //   // });
    // };
})
// .controller('DialogController', function ($scope, $mdDialog) {
//   $scope.hide = function() {
//     console.log("HIDDEN")
//     $mdDialog.hide();
//   };
//   $scope.cancel = function() {
//     console.log("CANCELLED")
//     $mdDialog.cancel();
//   };
//   $scope.answer = function(answer) {
//     console.log($scope.countyfocus)
//     console.log(answer)
//     $mdDialog.hide(answer);
//   };
// }
// );

