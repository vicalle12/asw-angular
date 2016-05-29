angular.module('routing').controller('HomeController', ['$scope', '$http',
    function ($scope, $http) {

        var SERVER_URL = 'https://hackernewsasw2016.herokuapp.com/contributions.json';

        var contribuciones = [];

        $http.get(SERVER_URL).then(function (response) {
            $scope.contributions = response.data;
            console.log("HOLA");
            /*
            for (var i=0; i<$scope.contributions.length; ++i) {
                getAutores(i, $scope.contributions[i].id);
            }
            */
            /*
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+response.data.user_id+".json").then(function(response2) {
                $scope.contributions.autor = response2.data.name;
            });
            */
        });

        /*
        var getAutores = function (i, j) {
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+$scope.contributions[i].user_id+".json").then(function(response2) {
                $scope.autor = response2.data.name;
                contribuciones.push(j + "/" + $scope.autor);
                //console.log(contribuciones);
                console.log(contribuciones);
            });
        }
        */

        $scope.getAuthor = function (i) {
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+i+".json").then(function(response2) {
                return response2.data.name;
            });
        }




    /*
    $scope.contributions = contributionsService.getContributions();
    console.log($scope.contributions);
    */
}]);