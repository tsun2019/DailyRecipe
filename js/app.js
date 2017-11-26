'use strict';

//Root module file

//main module that will have routes and also inject the recipe controller. inject other modules, while controller injects services?
angular.module("app", ['ngRoute','ui.bootstrap', 'DailyRecipe'])
.config(function($routeProvider) {
    //homepage
    $routeProvider.when('/', {controller: 'RecipeController', templateUrl: 'partials/home.html'});
    //recipe-info page
    $routeProvider.when('/search-results', {controller: 'RecipeController', templateUrl: 'partials/search-results.html'});
    $routeProvider.when('/recipe-info', {controller: 'RecipeController', templateUrl: 'partials/recipe-info.html'});
    
    //otherwise go to homepage ** not working. something to do with # or /
    $routeProvider.otherwise({ redirectTo: '/'});
});


angular.module('DailyRecipe', []);