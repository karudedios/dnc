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
      .state('landing.singin', {
        url: 'singin/',
        controller: 'UserController',
        controllerAs: 'userCtrl',
        templateUrl: '/app/views/user/singin.html'
      })
      .state('landing.signup', {
        url: 'signup/',
        controller: 'UserController',
        controllerAs: 'userCtrl',
        templateUrl: '/app/views/user/signup.html'
      })
      .state('authenticated', {
          abstract:true,
          url: '/main',
          controller: 'AuthenticatedController',
          templateUrl: '/app/views/user/default.html'
      })
      .state('authenticated.requests', {
          url: '/requests',
          templateUrl: '/app/views/user/requests.html'
      })
      .state('authenticated.requests.my', {
          url: '',
          controller: 'RequestsController',
          templateUrl: '/app/views/user/requests-list.html'
      })
      .state('authenticated.requests.all', {
          url: '',
          controller: 'RequestsController',
          templateUrl: '/app/views/user/requests-list.html'
      })
      .state('authenticated.messages', {
          url: '/messages',
          templateUrl: '/app/views/message/index.html'
      }).state('authenticated.profile', {
          url: '/profile',
          templateUrl: '/app/views/user/profile.html'
      });
  }]);
