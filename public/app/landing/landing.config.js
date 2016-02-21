angular.module('mainApp')
  .config([
          '$stateProvider',
  function($stateProvider ) {
    
    $stateProvider
      .state('landing', {
        url: '',
        abstract: true,
        controller: 'LandingCtrl',
        templateUrl: '/app/landing/views/default.html'
      })
      .state('landing.index', {
        url: '/',
        templateUrl: '/app/landing/views/home.html'
      })
      .state('landing.singin', {
        url: '/singin',
        controller: 'UserCtrl',
        controllerAs: 'userCtrl',
        templateUrl: '/app/landing/views/login.html'
      })
      .state('landing.signup', {
        url: '/signup',
        controller: 'UserController',
        controllerAs: 'userCtrl',
        templateUrl: '/app/landing/views/signup.html'
      });
  }]);
