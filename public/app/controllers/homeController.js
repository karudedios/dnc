var app = angular.module('mainApp');

app.controller('HomeController', funtion(){
    this.active = 0;
    
    this.setActive = function(_active){
        this.active = _active;
    }
    
    this.isActive = function(_active){
        this.active === _active;
    }
});