angular.module('routing').controller('SignInController', ['$scope', '$http',
    function ($scope, $http, $window, $rootScope) {
        $scope.userID="";
        console.log("token->",localStorage.getItem('hackerNewsToken'));
        
        $scope.signIn = function(){
            //console.log("scope", $scope.userID);
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+$scope.userID+".json").then(function(response) {
                if (response.data.error) window.alert(response.data.error);
                else {
                    var id = response.data.id;
                    //console.log("id", id);
                    //console.log("b64", btoa(id));
                    var aux = ""+btoa(id);
                    localStorage.setItem('hackerNewsToken', aux);
                    localStorage.setItem('id', id);
                    //console.log("token->",localStorage.getItem('hackerNewsToken'));

                    location.reload();
                }
            },
            function(data) {
               alert("Error: "+data.data.error); 
            });
        }

        $scope.signOut = function(){
            localStorage.removeItem('hackerNewsToken');
            localStorage.removeItem('id');
            location.reload();
        }
    }
]);