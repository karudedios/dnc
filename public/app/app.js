angular.module('mainApp', ['ui.router'])
  .config([
          '$stateProvider', '$urlRouterProvider',
  function($stateProvider ,  $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
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
