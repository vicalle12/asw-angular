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
      templateUrl: 'templates/asks.html',
      controller: 'TasksListController'
    })
    .state('contribution', {
      url: '/contributions/:contributionId',
      templateUrl: 'templates/contribution.html',
      controller: 'ContributionController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'ContributionsController'
    });
  $urlRouterProvider.otherwise('/newtask');
}
