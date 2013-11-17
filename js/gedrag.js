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

function mainController($scope, GetFontList){
  GetFontList.get().success(function(data){
    $scope.fonts = data;
  });
}


function homeController($scope, FavouriteFonts, SampleText){
  $scope.sample = SampleText.getSample();

  $scope.saveSample = function(){
    SampleText.setSample($scope.sample);
  };

  $scope.isFavourite = function(id){
    return FavouriteFonts.checkFavourite(id);
  };

  $scope.favouriteList = function(){
    return FavouriteFonts.getFavourites();
  };

  $scope.favourite = function(id){
    return FavouriteFonts.toggleFavourite(id);
  };

  $scope.filterFavourites = function(element){
    return $scope.favouriteList().some(function(el, indx, arr){
      return element.id == el;
    });
  };
}

function fontController($scope, $routeParams, GetFontList){
  GetFontList.get().success(function(data){
    $scope.font = data.filter(function(font){
      return font.id === parseInt($routeParams.param)
    })[0];
  });
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

ngFonts.factory('GetFontList', function($http){
  return {
    get : function(){
      return $http({method : 'GET', url : 'js/data/fontList.json', cache : true})
    }
  }
})

ngFonts.factory('FavouriteFonts', function(){
  if(!localStorage.getItem('favouriteFonts')){
    var favouriteFonts = [];
    localStorage.setItem('favouriteFonts', JSON.stringify(favouriteFonts))
  }
  else{
    var favouriteFonts = JSON.parse(localStorage.getItem('favouriteFonts'));
  }

  return {
    getFavourites : function(){
      return favouriteFonts;
    },
    addFavourite : function(font){
      favouriteFonts.push(font)
      localStorage.setItem('favouriteFonts', JSON.stringify(favouriteFonts))
    },
    checkFavourite : function(font){
      var isFont = favouriteFonts.filter(function(f){
        return f == font
      })
      return isFont.length ? true : false;
    },
    toggleFavourite : function(font){
      if(this.checkFavourite(font)){
        this.removeFavourite(font);
      }
      else{
        this.addFavourite(font);
      }
    },
    removeFavourite : function(font){
      var newFavouriteFonts = favouriteFonts.filter(function(f){
        return f != font
      });
      favouriteFonts = newFavouriteFonts;
      localStorage.setItem('favouriteFonts', JSON.stringify(newFavouriteFonts))
    }
  }
})

ngFonts.factory('SampleText', function(){
  if(!localStorage.getItem('sampleText')){
    var sampleText = 'The quick brown fox jumps over the lazy dog. Grumpy wizards make a toxic brew for the jovial queen.';
    localStorage.setItem('sampleText', sampleText);
  }
  else{
    var sampleText = localStorage.getItem('sampleText');
  }

  return {
    getSample : function(){
      return sampleText;
    },
    setSample : function(text){
      sampleText = text;
      localStorage.setItem('sampleText', text);
    }
  }
})

/* End Services */




/* x
 * ========================================= */

/* End x */
