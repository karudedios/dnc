angular.module('mainApp', ['ui.router'])
  .config([
          '$stateProvider', '$urlRouterProvider',
  function($stateProvider ,  $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('landing', {
        url: '/',
        abstract: true,
        controller: 'HomeController',
        templateUrl: '/app/views/default.html'
      })
      .state('landing.index', {
        url: '',
        templateUrl: "/app/views/default.html"
      })
      .state('landing.auth.login', {
        url: 'auth/login/',
        templateUrl: "/app/views/user/login.html"
      })
      .state('landing.auth.signup', {
        url: 'auth/signup/',
        templateUrl: "/app/views/user/signup.html"
      });
  }]);
