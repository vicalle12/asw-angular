angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('submit', {
      url: '/contributions/new',
      templateUrl: 'templates/submit.html',
      controller: 'ContributionsController'
    })
    .state('asks', {
      url: '/asks',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    })
    .state('asks', {
      url: '/contributions/contributionId',
      templateUrl: 'templates/contribution.html',
      controller: 'ContributionCtrl'
    })
    ;
  $urlRouterProvider.otherwise('/newtask');
}
