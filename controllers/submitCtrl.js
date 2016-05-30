angular.module('routing').controller('submitController', ['$scope', '$http',
    function ($scope, $http) {
	
	$scope.submitContribution = function(){
      $http.post("https://hackernewsasw2016.herokuapp.com/contributions/", { user_token: localStorage.getItem('hackerNewsToken'),titulo: $scope.contributionTitle,text: $scope.contributionContent,url: $scope.contributionUrl } )
      .success(function(data, status) {
        console.log(data);
		if (status != 400) {
			window.location.href="/";
			window.location.href;
		}
		else { 
			window.location.reload();
		}
      });
    }  

}]);
