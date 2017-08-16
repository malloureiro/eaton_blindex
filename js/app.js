var app = angular.module('blindexByEaton', ['ngSanitize','ngRoute']);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
       templateUrl: "/views/main.html",
       controller:'initialPageController',
      })
      .when('/serie20', {
       templateUrl: "/views/serie20/view.html"
      })
      .when('/sirenes_alarmes', {
       templateUrl: "/views/sirenes_alarmes/view.html"
      })
      .when('/linhaM22', {
       templateUrl: "/views/linhaM22/view.html"
      })
      .when('/linhaA22', {
       templateUrl: "/views/linhaA22/view.html"
      })
      .when('/linhaRMQ16', {
       templateUrl: "/views/linhaRMQ16/view.html"
      })
      .when('/chaves', {
       templateUrl: "/views/linhaChaves/view.html"
      })
      .when('/caixas', {
       templateUrl: "/views/linhaCaixas/view.html"
      })
      .when('/linhasSL7_SL4', {
       templateUrl: "/views/linhaSL7_SL4/view.html"
      })
      .otherwise({ redirectTo: '/' });

      $locationProvider.hashPrefix('');
}]);
