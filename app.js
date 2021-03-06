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
	.state('submit', {
      url: '/submit',
      templateUrl: 'templates/submit.html',
      controller: 'submitController'
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
	.state('threads', {
		url: '/threads',
		templateUrl: 'templates/threads.html',
		controller: 'threadsController'
	})
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'templates/signIn.html',
      controller: 'SignInController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
    .state('user', {
      url: '/users/:userId',
      templateUrl: 'templates/user.html',
      controller: 'UserController'
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
  if (!localStorage.getItem('hackerNewsToken') || localStorage.getItem('hackerNewsToken')== null) $scope.signText='Sign In';
  else {
    $scope.signText='Sign Out';
    $scope.profile = 'Profile';
	$scope.threads = 'Threads';
  }
});
