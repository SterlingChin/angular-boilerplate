angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html'
        })
        .state('page2',{
            url: '/page2',
            templateUrl: '../views/page2.html'
        })
        .state('page3', {
            url: './page3',
            templateUrl: '../views/page3.html'
        })
})