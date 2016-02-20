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
        templateUrl: '/app/views/home.html'
      })
      .state('landing.login', {
        url: 'login/',
        templateUrl: '/app/views/user/login.html'
      })
      .state('landing.signup', {
        url: 'signup/',
        templateUrl: '/app/views/user/signup.html'
      })
      .state('authenticated', {
          url: '/main',
          templateUrl: '/app/views/user/default.html'
      });
  }]);
