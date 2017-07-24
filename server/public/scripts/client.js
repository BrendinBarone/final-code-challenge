var myApp = angular.module('myApp', ['ngRoute']);

giphyApp.config(function($routeProvider) {
  $routeProvider
    .when('/message', {
      //STRING VERSION OF HomeController
      controller: 'MessageController as mc',
      templateUrl: '/views/templates/index.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
