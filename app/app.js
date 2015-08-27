var hxplus;

(function(){
    hxplus = angular.module('hxplus', ['ui.router','ngResource',
        'ngMaterial','ngMdIcons','pascalprecht.translate','angular-jwt']);

    //===== CONFIGURACION DE APP. 1ER PPASO: REDIRECCIONAMIENTOS ====//
    hxplus.config(function($stateProvider, $urlRouterProvider, $translateProvider){

        $urlRouterProvider.otherwise('/login');

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
            url: '/userForm/:id',
            templateUrl: 'app/user/userForm.html'
        });

        $stateProvider.state('home.userList',{
            url: '/userList',
            templateUrl: 'app/user/userList.html'
        });

        $stateProvider.state('home.userDetails',{
            url: '/userDetails/:id',
            templateUrl: 'app/user/userDetails.html'
        });

        $stateProvider.state('home.userEdit',{
            url: '/userEdit/:id',
            templateUrl: 'app/user/userEdit.html'
        });        

        $stateProvider.state('home.userCreate',{
            url: '/userCreate',
            templateUrl: 'app/user/userCreateNew.html'
        });

        //===== CONFIGURACION DE TRADUCCIONES ====//
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('es_VE');
        $translateProvider.useSanitizeValueStrategy('escape');

        //===== INYECTOR DE HEADER =====//

        
        //===== FIN DEL INYECTOR =====//

    });
})()