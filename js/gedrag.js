'use strict';


/* App module
 * ========================================= */

var ngFonts = angular.module('ngFonts', [])

ngFonts.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html',
      controller: homeController
    });
    $routeProvider.when('/font/:param', {
      templateUrl: 'partials/font.html',
      controller: fontController
    });
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
  $scope.sample = 'The quick brown fox jumps over the lazy dog. Grumpy wizards make a toxic brew for the jovial queen.';
}


function homeController($scope, FavouriteFonts){
  $scope.isFavourite = function(id){
    return FavouriteFonts.checkFavourite(id)
  }
  $scope.favouriteList = function(){
    return FavouriteFonts.getFavourites()
  }
  $scope.favourite = function(id){
    if($scope.isFavourite(id)){
      FavouriteFonts.removeFavourite(id);
    }
    else{
      FavouriteFonts.addFavourite(id);
    }
  }
}

function fontController($scope, $routeParams, $filter){
  $scope.font = $scope.fonts[$routeParams.param]
  //$scope.font = $filter('filter')($scope.fonts, {id: $routeParams.param}, true); // greedy as fuck
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

ngFonts.factory('FavouriteFonts', function(){
  var favouriteFonts = [40, 25, 66, 77];

  return {
    getFavourites : function(){
      return favouriteFonts;
    },
    addFavourite : function(font){
      favouriteFonts.push(font)
    },
    checkFavourite : function(font){
      var isFont = favouriteFonts.filter(function(f){
        return f == font
      })
      if(isFont.length){
        return true;
      }
      else{
        return false;
      }
    },
    removeFavourite : function(font){
      var newFavouriteFonts = favouriteFonts.filter(function(f){
        return f != font
      });
      favouriteFonts = newFavouriteFonts;
    }
  }
})

/* End Services */




/* x
 * ========================================= */

/* End x */
