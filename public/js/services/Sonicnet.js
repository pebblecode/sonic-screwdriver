angular.module('Sonicnet', [])
  .factory('$sonicnetListener', function() {
      /*global SonicCoder: true, SonicServer: true*/
      'use strict';

      var SonicnetListener = {};

      SonicnetListener.audibleRangeCoder = new SonicCoder({
        freqMin: 440,
        freqMax: 1760
      });

      SonicnetListener.server = new SonicServer({
        alphabet: ' abcdefghijklmnopqrstuvwxyz1234567890',
        debug: false
        // Audible range
        //coder: SonicnetListener.audibleRangeCoder
      });


      SonicnetListener.start = function() {
        SonicnetListener.server.start();
      };

      SonicnetListener.stop = function() {
        SonicnetListener.server.stop();
      };

      SonicnetListener.on = function(callback) {
        SonicnetListener.server.on('message', callback);
      };

      return SonicnetListener;
  })
  .factory('$sonicnetSender', function() {
      /*global SonicSocket: true*/
      'use strict';
      var SonicnetSender = {};

      SonicnetSender.socket = new SonicSocket({
        alphabet: ' abcdefghijklmnopqrstuvwxyz1234567890'
      });

      SonicnetSender.send = function(message) {
        console.log('Message to send', message);
        SonicnetSender.socket.send(message);
      };

      return SonicnetSender;
  });
