var hxplus;

(function(){
    hxplus = angular.module('hxplus', ['ui.router','ngResource','ngMaterial']);

    hxplus.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/login')

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        });

        $stateProvider.state('home',{
            url: '/home/:id',
            templateUrl: 'app/home/home.html'
        });

        $stateProvider.state('home.main',{
            url: '/main',
            templateUrl: 'app/main/main.html'
        });

        //===== ESTADO DE PRUEBA PARA NUEVAS REFERENCIAS NO IMPLEMENTADAS =====//
        $stateProvider.state('home.prueba',{
            url: '/prueba',
            templateUrl: 'prueba.html'
        });
    });
})()