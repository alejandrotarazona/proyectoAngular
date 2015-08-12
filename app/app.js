var hxplus;

(function(){
    hxplus = angular.module('hxplus', ['ui.router','ngResource',
        'ngMaterial','ngMdIcons','pascalprecht.translate','angular-jwt']);

    //===== CONFIGURACION DE APP. 1ER PPASO: REDIRECCIONAMIENTOS ====//
    hxplus.config(function($stateProvider, $urlRouterProvider, $translateProvider){

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

        $stateProvider.state('home.userProfile',{
            url: '/userProfile/:id',
            templateUrl: 'app/user/userProfile.html'
        });

        $stateProvider.state('home.userForm',{
            url: 'userForm/:id',
            templateUrl: 'app/user/userForm.html'
        });

        //===== ESTADO DE PRUEBA PARA NUEVAS REFERENCIAS NO IMPLEMENTADAS =====//
        $stateProvider.state('home.prueba',{
            url: '/prueba',
            templateUrl: 'prueba.html'
        });

        $stateProvider.state('html',{
            url: '/pruebahtml',
            templateUrl: '/pruebahtml.html'
        });

        //===== CONFIGURACION DE TRADUCCIONES ====//
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('es_VE');
        $translateProvider.useSanitizeValueStrategy('escape');

        //===== INYECTOR DE HEADER =====//

        hxplus.run(function($http) {
          $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token;
        });

        //===== FIN DEL INYECTOR =====//

    });
})()