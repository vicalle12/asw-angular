angular.module('routing').controller('threadsController', ['$scope', '$http', function ($scope, $http) {
	if (localStorage.getItem('hackerNewsToken') != null) {
		var id = localStorage.getItem('id')
		$http.get("https://hackernewsasw2016.herokuapp.com/users/"+id+"?submission_type=comments").then(function(response) {
			$scope.comments = response.data;
			for (var j = 0; j < $scope.comments.length; j++) {
				var contrib_title = getContribTitleFromComment(j, $scope.comments); 
            }
			
		});
		
		$http.get("https://hackernewsasw2016.herokuapp.com/users/"+id+"?submission_type=replies").then(function(response2) {
			$scope.replies = response2.data;
			for (var j = 0; j < $scope.replies.length; j++) {
				var contrib_title = getContribTitleFromReply(j, $scope.replies); 
            }
		});
		
		var getContribTitleFromComment = function(i, object){
			$http.get("https://hackernewsasw2016.herokuapp.com/contributions/"+object[i].contribution_id+".json").then(function(response3) {
				$scope.comments[i].contrib_title = response3.data.titulo;  
			});
		}
		
		var getContribTitleFromReply = function(i, object){
			$http.get("https://hackernewsasw2016.herokuapp.com/contributions/"+object[i].contribution_id+".json").then(function(response4) {
				$scope.replies[i].contrib_title = response4.data.titulo;  
			});
		}
		

		
		$scope.voteComment = function(id){
		  $http.put("https://hackernewsasw2016.herokuapp.com/comments/"+id+"/like", { user_token: "MQ"} )
		  .success(function(data, status) {
			window.location.reload();
		  });
		}

		$scope.voteReply = function(id){
		  $http.put("https://hackernewsasw2016.herokuapp.com/replies/"+id+"/like", { user_token: "MQ"} )
		  .success(function(data, status) {
			window.location.reload();
		  });
		}
	}
}]);