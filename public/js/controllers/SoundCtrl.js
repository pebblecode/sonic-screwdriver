angular.module('ExampleApp')
  .controller('SoundCtrl',
  ['$scope', '$sonicnetListener', '$sonicnetSender',
  function($scope, $sonicnetListener, $sonicnetSender) {

    $scope.values = [];

    $scope.setupListener = function() {
      if ($sonicnetListener.server.isRunning) {
        $sonicnetListener.stop();
      }
      $sonicnetListener.start();

      $sonicnetListener.on(function(message) {
        //console.log(message);
        $scope.values.push(message);
      });
    };

    $scope.setupSender = function() {
      $sonicnetSender.send('pebblecode');
    };
  }]);
