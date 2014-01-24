angular.module('ExampleApp', ['Sonicnet'])
  .config(function() {

  })
  .run(['$rootScope', function($rootScope) {

      $rootScope.alphabet = '0123456789';
  }]);
