angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider
    /*
    .state('newtask', {
      url: '/newtask',
      templateUrl: 'templates/newtask.html',
      controller: 'NewTaskController'
    })
    .state('taskslist', {
      url: '/taskslist',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    });
    */
    .state('submit', {
      url: '/contributions/new',
      templateUrl: 'templates/submit.html',
      controller: 'ContributionsController'
    })
    .state('asks', {
      url: '/asks',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    });
  $urlRouterProvider.otherwise('/newtask');
}
