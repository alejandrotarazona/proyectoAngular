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
	    	url: '/home',
	    	templateUrl: 'app/home/home.html'
	    })
	});
})()