angular.module('routing').controller('HomeController', HomeController);

function HomeController($scope, $rootScope) {
  $scope.contributions = [];

  contributionsService.getContributions().then(function (data) {
      $scope.contributions = data.data;
    });
}