angular.module('mainApp')
  .controller('UserController',['$http', '$state', function ($http, $state) {
    var self = this;
    this.user = { }
    
    this.register = function (user) {
        var controller = this;
        
        $http({method:'POST', url: '', data: user}).success(function (data) {
            controller.user = {};
        });
    }
    
    this.login = function (login) {        
        $http({method:'POST', url:'http://localhost:3000/api/auth/login', data: login})
        .then(function (data) {
            $state.go('authenticated.requests', {});
        })
        .catch(function(err){
            self.errorMessage = err.data;
        });
    }
}]);