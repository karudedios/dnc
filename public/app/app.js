var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'app/views/home.html'
        })
        .when('/auth/signin', {
            templateUrl : 'app/views/user/login.html'
        })
        .when('/auth/signup', {
            templateUrl : 'app/views/user/signup.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
