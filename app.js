//angular.module('routing', ['ui.router', 'ngMessages', 'angularMoment']).config(Config);

var hNapp = angular.module('routing', ['ui.router', 'ngMessages', 'angularMoment']);


hNapp.config(function($stateProvider, $urlRouterProvider) {

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
      controller: 'ContributionController'
    })
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'templates/signIn.html',
      controller: 'SignInController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    });
  $urlRouterProvider.otherwise('/');

  /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
*/
});

//var hNapp = angular.module('routing', []);

hNapp.controller('mainController', function MainController($scope) {
  if (!localStorage.getItem('hackerNewsToken')) $scope.signText='Sign In';
  else $scope.signText='Sign Out';

  if ($scope.signText=='Sign Out') {
    //quiere decir que ha pulsado el sign Out, por lo que lo deslogueamos
    localStorage.setItem('hackerNewsToken', null);
  }
});
