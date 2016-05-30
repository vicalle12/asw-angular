angular.module('routing').controller('UserController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $http.get("https://hackernewsasw2016.herokuapp.com/users/"+$stateParams.userId+".json")
    .then(function(response) {
      $scope.name = response.data.name;
      $scope.email = response.data.email;
      $scope.about = response.data.about;
      
    });

}]);