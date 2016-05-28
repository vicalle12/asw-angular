angular.module('routing').controller('ContributionController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $http.get("https://hackernewsasw2016.herokuapp.com/contributions/"+$stateParams.contributionId+".json")
    .then(function(response) {
      $scope.titulo = response.data.titulo;
      $scope.puntos = response.data.puntos;
      $http.get("https://hackernewsasw2016.herokuapp.com/users/"+response.data.user_id+".json").then(function(response2) {
        $scope.autor = response2.data.name;  
      });
      $scope.url = response.data.url;
      $scope.date = response.data.created_at;
    });

    $scope.sendComment = function(){
      $http.post("https://hackernewsasw2016.herokuapp.com/comments/", { content: $scope.newComment,contribution_id: $stateParams.contributionId,user_token: "MQ"} ).success(function(data, status) {
        console.log(data);
      });
    }
}]);

