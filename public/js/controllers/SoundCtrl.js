angular.module('SonicScrewdriver')
  .controller('SoundCtrl',
  ['$scope', '$rootScope', '$sonicnetListener', '$sonicnetSender', '$location', 'availableAdverts',
  function($scope, $rootScope, $sonicnetListener, $sonicnetSender, $location, availableAdverts) {

    var adKeys = Object.keys(availableAdverts);

    $scope.values = [];

    $scope.setupListener = function() {
      if ($sonicnetListener.isRunning()) {
        $sonicnetListener.stop();
      }

      $sonicnetListener.start();

      $sonicnetListener.on(function(adId) {
        if (availableAdverts[adId]) {
          if ($sonicnetListener.isRunning()) {
            $sonicnetListener.stop();
          }
          $scope.$apply(function() {
            $(".panel").toggleClass("active");
          });
        }
      });
    };

    $scope.setupSender = function() {
      $sonicnetSender.send(adKeys[Math.floor(Math.random() * adKeys.length)]);
    };
  }]);
