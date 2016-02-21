angular.module('mainApp')
  .controller('LandingCtrl', function($scope, $state) {
    $scope.navigation = [
      { name: 'Home', route: 'landing.index' },
      { name: 'Sing In', route: 'landing.singin' },
      { name: 'Signup', route: 'landing.signup'},
      { name: 'Sing In as Judge', route: 'authenticated.requests' }
    ];
    
    $scope.current = $state.current.name;

    $scope.$on('$stateChangeSuccess', function(evt, to) {
      $scope.current = to.name;
    });
});
