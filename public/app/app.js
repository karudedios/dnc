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
        template: "<h2> This is index </h2>"
      })
      .state('landing.login', {
        url: 'login/',
        template: "<h2> This is login </h2>"
      })
      .state('landing.signup', {
        url: 'signup/',
        template: "<h2> This is signup </h2>"
      });
  }]);
