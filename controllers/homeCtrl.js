angular.module('routing').controller('HomeController', HomeController);

function HomeController($scope, $rootScope) {
  $scope.search = {};
  $scope.taskslist = $rootScope.taskslist;
}