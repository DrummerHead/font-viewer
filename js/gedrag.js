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
    $routeProvider.when('/favourites/', {
      templateUrl: 'partials/favourites.html',
      controller: homeController
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
}


function homeController($scope, FavouriteFonts, SampleText){
  $scope.sample = SampleText.getSample();

  $scope.saveSample = function(){
    SampleText.setSample($scope.sample);
  }

  $scope.isFavourite = function(id){
    return FavouriteFonts.checkFavourite(id)
  };

  $scope.favouriteList = function(){
    return FavouriteFonts.getFavourites()
  };

  $scope.favourite = function(id){
    if($scope.isFavourite(id)){
      FavouriteFonts.removeFavourite(id);
    }
    else{
      FavouriteFonts.addFavourite(id);
    }
  };

  $scope.filterFavourites = function(element){
    return $scope.favouriteList().some(function(el, indx, arr){
      return element.id == el
    });
  };
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

ngFonts.factory('SampleText', function(){
  var sampleText = 'The quick brown fox jumps over the lazy dog. Grumpy wizards make a toxic brew for the jovial queen.';

  return {
    getSample : function(){
      return sampleText;
    },
    setSample : function(text){
      sampleText = text;
    }
  }
})

/* End Services */




/* x
 * ========================================= */

/* End x */
