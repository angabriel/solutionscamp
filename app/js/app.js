var app = angular.module('drinkApp', ['drinkService', 'ngResource', 'scList'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/team', {templateUrl: 'view/team.html'})
            .otherwise({redirectTo: '/', templateUrl: 'view/drinks.html', controller: DrinkController });
    });