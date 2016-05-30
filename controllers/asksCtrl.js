angular.module('routing').controller('asksController', ['$scope', '$http',
    function ($scope, $http) {

        var SERVER_URL = 'https://hackernewsasw2016.herokuapp.com/contributions.json';


        $http.get(SERVER_URL).then(function (response) {
            $scope.contributions = response.data;
            for (var i=0; i<$scope.contributions.length; ++i) {
                console.log($scope.contributions[i].titulo)
                var autores = getAutores(i);
                var comments = getComments (i, $scope.contributions)
            }
        });


        var getAutores = function (i) {
            $http.get("https://hackernewsasw2016.herokuapp.com/users/"+$scope.contributions[i].user_id+".json").then(function(response2) {
                $scope.contributions[i].autor = response2.data.name;
            });
        }

        var getComments = function (i, object) {
            $http.get("https://hackernewsasw2016.herokuapp.com/comments.json?contribution_id="+object[i].id+"")
                .then(function(responsecomments) {
                    $scope.contributions[i].comments = responsecomments.data.length;
                    $scope.contributions[i].replies = 0;
                    $scope.contrComments = responsecomments.data;
                    //console.log($scope.contrComments);
                    for (var j = 0; j < $scope.contrComments.length; j++) {
                        var replies = getReplies(i, j, $scope.contrComments);

                    }

                });
        }

        var getReplies = function(i, j, object){
            $http.get("https://hackernewsasw2016.herokuapp.com/replies.json?comment_id="+object[j].id)
                .success(function(data) {
                    $scope.contributions[i].replies += data.length;
                    //console.log(data);
                });
        }

        $scope.voteContribution = function(id){
            $http.put("https://hackernewsasw2016.herokuapp.com/contributions/"+id+"/like", { user_token: "MQ"} )
                .success(function(data, status) {
                    //console.log("he votado");
                    window.location.reload();
                });
        }




    /*
    $scope.contributions = contributionsService.getContributions();
    console.log($scope.contributions);
    */
}]);