angular.module('mainApp')
  .controller('RquestsController', function($scope, $state) {
    $scope.requests = [
        { name: 'All Requests', route: 'authenticated.requests.all' },
        { name: 'My Requests', route: 'authenticated.requests.my' },
    ];
    
    $scope.current = $state.current.name;

    $scope.$on('$stateChangeSuccess', function(evt, to) {
      $scope.current = to.name;
    });
});
