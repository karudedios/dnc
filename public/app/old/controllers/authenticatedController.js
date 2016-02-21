angular.module('mainApp')
  .controller('AuthenticatedController', function($scope, $state) {
    $scope.authenticatedNav = [
        { name: 'Requests', route: 'authenticated.requests' },
        { name: 'Messages', route: 'authenticated.messages' },
        { name: 'Profile', route: 'authenticated.profile'}
    ];
    
    $scope.requests = [
        { name: 'All Requests', route: 'authenticated.requests.all' },
        { name: 'My Requests', route: 'authenticated.requests.my' },
    ];
    
    $scope.current = $state.current.name;

    $scope.$on('$stateChangeSuccess', function(evt, to) {
      $scope.current = to.name;
    });
});
