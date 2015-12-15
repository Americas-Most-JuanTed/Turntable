(function(){
  'use strict';;

  angular.module('app.routes', ['ngRoute'])
    .config(['$routeProvider','$locationProvider', turntableRoutes])

    function turntableRoutes($routeProvider, $locationProvider){
      $routeProvider
        .when('/search', {
          templateUrl : 'partials/turntable.html',
          controller: 'musicController',
          controllerAs : 'musicCtrl'
        })
    }
})
