angular.module('SonicScrewdriver', ['ngRoute', 'Sonicnet'])
  .config(['$provide', '$routeProvider', '$locationProvider', function($provide, $routeProvider, $locationProvider) {

      $provide.value('SONIC_ALPHABET', ' abcdefghijklmnopqrstuvwxyz1234567890');

      $provide.value('availableAdverts', {
        'abc123': {
          title: '10% off your next visit',
          description: 'Get 10% off your next visit to our store'
        },
        'xyz321': {
          title: 'BOGOF',
          description: 'You buy one, you get on free!'
        },
        'elo987': {
          title: 'Free Sample',
          description: 'Come get your free sample today'
        }
      });

      $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html'
      })
      .when('/ads/:adId', {
        templateUrl: '/templates/ad-display.html',
        controller: 'AdvertCtrl'
      })
      .otherwise({
        redirectTo: '/ad-not-found'
      });

      $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', function($rootScope) {


  }]);
