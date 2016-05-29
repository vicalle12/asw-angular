angular.module('routing').controller('SignInController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.userID="";

        $scope.signIn = function(){
            console.log("scope", $scope.userID);
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+$scope.userID+".json").then(function(response) {
                if (response.data.error) window.alert(response.data.error);
                else {
                    var id = response.data.id;
                    //console.log("id", id);
                    //console.log("b64", btoa(id));
                    localStorage.setItem('hackerNewsToken', btoa(id));
                    window.location.reload();
                }
            },
            function(data) {
               alert("Error: "+data.data.error); 
            });
        }
    }
]);