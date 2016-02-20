angular.module('mainApp')
.controller('UserController',['$http', function ($http) {
    this.user = {}
    
    this.register = function (user) {
        var controller = this;
        
        $http({method:'POST', url: '', data: user}).success(function (data) {
            controller.user = {};
        });
    }
    
    this.login = function (login) {
        $http({method:'POST', url:'', data: login}).success(function (data) {
            
        });        
    }
}]);