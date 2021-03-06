var myApp = angular.module('singlePageApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/solar.html',
            controller  : 'mainController'
        })
        // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'The Solar Express !';
});

myApp.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Welcome to home page !';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'Look ! I am an about page.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us!  This is just a demo.';
});