var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      access: {restricted: true}
    })
    .when('/welcome', {
      templateUrl: 'partials/welcome.html',
      access : { restricted: false }
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/dj', {
      templateUrl: 'partials/dj.html',
      access: {restricted: false}
    })
    .when('/dj-members', {
      templateUrl: 'partials/dj-members.html',
      access: {restricted: true}
    })
    .otherwise({redirectTo: '/welcome'});
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && AuthService.isLoggedIn() === false) {
      $location.path('/welcome');
      $route.reload();
    }
  });
});
