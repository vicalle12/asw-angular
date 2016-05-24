angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider
    /*
    .state('newtask', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('taskslist', {
      url: '/taskslist',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    });
    */
    .state('newContribution', {
      url: '/contributions/new',
      templateUrl: 'templates/newContribution.html',
      controller: 'newContributionController'
    })
    .state('asks', {
      url: '/asks',
      templateUrl: 'templates/asks.html',
      controller: 'asksController'
    })
    .state('contribution', {
      url: '/contributions/:contributionId',
      templateUrl: 'templates/contribution.html',
      controller: 'ContributionCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    });
  $urlRouterProvider.otherwise('/');
}
