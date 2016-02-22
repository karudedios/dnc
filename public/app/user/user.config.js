function UserConfig(stateProvider) {
  var baseUserPath = '/app/user';
  var baseTemplatePath = baseUserPath + '/templates';

  stateProvider
    .state('user', {
      url: '/user',
      templateUrl: baseUserPath + '/views/_layout.html'
    }).state('user.index', {
      url: '/',
      controller: 'UserCtrl',
      templateUrl: baseUserPath + '/views/index.html',
      views: {
        'client': {
          //controller: 'ClientCtrl',
          templateUrl: baseTemplatePath + '/client/_index.html'
        },
        'contractor': {
          //controller: 'ContractorCtrl',
          templateUrl: baseTemplatePath + '/contractor/_index.html'
        }
      }
    });
}

UserConfig.$inject = ['$stateProvider'];

angular.module('mainApp')
  .config(UserConfig);
