angular.module('DailyRecipe')
.controller('RecipeController', ['$scope', '$http', '$location', function($scope,$http,$location) {
    $scope.greeting = 'Hola!';
    //ng-model connects view/input text to this search variable. This variable is whatever the user searches for in the input. 
    $scope.search;
    $scope.q;
////Simple get recipe function that gets onion soup recipe entry from Yummly database.
  $scope.getRecipe = function(){
      //$http.get shortcut(url, config). My config was an object with q and headers.
      $http.get('http://api.yummly.com/v1/api/recipes',{
        //q search object
        q: $scope.search,
        //ID AND KEY HEADER FOR AUTHORIZATION ACESSS TO API
        headers: {'X-Yummly-App-ID':'f23c4998','X-Yummly-App-Key':'41959cc6626ebce63aec4d212b9168af'}
        //If sucessful or failure to call API.
      }).success(function(response) {
          //sucess so switch to search result page (go function) and save response and search item.
          
          $scope.q = $scope.search;
          $scope.search = response.matches;
          
          console.log("I got the response for " + $scope.search);
        }).error(function(error) {
          console.log("Error: ", error);
        })
      
  }
  
  //go to results page
  $scope.go = function (path) {
      $location.path(path);
  };
  
}]);