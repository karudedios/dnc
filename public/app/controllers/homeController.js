angular.module('mainApp')
  .controller('HomeController', function($scope, $state) {
    $scope.navigation = [
      { name: 'Home', route: 'landing.index' },
      { name: 'Login', route: 'landing.login' },
      { name: 'Signup', route: 'landing.signup'}
    ];

    $scope.current = $state.current.name;

    $scope.$on('$stateChangeSuccess', function(evt, to) {
      $scope.current = to.name;
    });
});
