var UserCtrl = ['$scope', function ($scope) {
  console.log("entered scope");
  $scope.userTypeName = 'client';
}];

angular.module('mainApp')
  .controller('UserCtrl', UserCtrl);
