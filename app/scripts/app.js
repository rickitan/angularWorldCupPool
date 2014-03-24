'use strict';

angular.module('quinielaApp', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{templateUrl: '/views/main.html', controller: "MainCtrl"})
            //.when('/secondStage',{templateUrl: '/views/secondStage.html', controller: "MainCtrl"})
            //.when('/',{templateUrl: '/views/secondStage.html', controller: "MainCtrl"})

            .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    })
