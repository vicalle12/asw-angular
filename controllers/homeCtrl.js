angular.module('routing').controller('HomeController', ['$scope', '$http',
    function ($scope, $http) {

        var SERVER_URL = 'https://hackernewsasw2016.herokuapp.com/contributions.json';
        
        $http.get(SERVER_URL).then(function (response) {
            $scope.contributions = response.data;
            console.log($scope.contributions);
        });

    /*
    $scope.contributions = contributionsService.getContributions();
    console.log($scope.contributions);
    */
}]);