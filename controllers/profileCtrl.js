angular.module('routing').controller('ProfileController', ['$scope', '$http',
    function ($scope, $http) {
    	if (localStorage.getItem('hackerNewsToken') != null) {
    		    $scope.user = {
			        name: '',
			        email: '',
			        about: ''
			    };
			    var id = localStorage.getItem('id')
    		$http.get("https://hackernewsasw2016.herokuapp.com/users/"+id+".json").then(function(response) {
                if (response.data.error) window.alert(response.data.error);
                else {
                    $scope.user.name = response.data.name;
                    $scope.user.email = response.data.email;
                    $scope.user.about = response.data.about;
                }
            },
            function(data) {
               alert("Error: "+data.data.error); 
            });
    	}

    	

	$scope.modifyProfile = function(){
		$http.put("https://hackernewsasw2016.herokuapp.com/users/"+id, { name: $scope.user.name, about: $scope.user.about, email: $scope.user.email, user_token:localStorage.getItem('hackerNewsToken')} )
		.success(function(data, status) {
			window.location.reload();
		});
	}
    }
]);