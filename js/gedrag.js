'use strict';


/* App module
 * ========================================= */

var ngFonts = angular.module('ngFonts', [])

ngFonts.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html',
      controller: homeController
    });
    /* * /
    $routeProvider.when('/img:params', {
      templateUrl: 'partials/image.html',
      controller: imageController
    });
    /* */
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }]);

/* End App module */




/* Controllers
 * ========================================= */

function mainController($scope, $http){
  $http.get('js/data/fontList.json').success(function(data){
    $scope.fonts = data;
  });
}


function homeController($scope){
}

/* End Controllers */




/* Directives
 * ========================================= */

/* End Directives */




/* Filters
 * ========================================= */

/* End Filters */




/* Services
 * ========================================= */

/* End Services */




/* x
 * ========================================= */

/* End x */
