angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider
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
      controller: 'ContributionController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    });
  $urlRouterProvider.otherwise('/');

  /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
*/
}
