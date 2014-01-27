angular.module('SonicScrewdriver')
  .controller('AdvertCtrl',
  ['$scope', '$rootScope', '$location', 'availableAdverts', '$routeParams', '$sonicnetListener',
  function($scope, $rootScope, $location, availableAdverts, $routeParams, $sonicnetListener) {
    'use strict';

    $scope.ad = availableAdverts[$routeParams.adId];
  }]);
