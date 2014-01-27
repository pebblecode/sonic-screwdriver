angular.module('SonicScrewdriver')
  .controller('AdvertCtrl',
  ['$scope', '$rootScope', '$location', 'availableAdverts', '$routeParams',
  function($scope, $rootScope, $location, availableAdverts, $routeParams) {
    'use strict';

    console.log($routeParams);

    $scope.ad = availableAdverts[$routeParams.adId];


  }]);
