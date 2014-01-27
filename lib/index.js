var http = require('http');
var express = require('express');
var _ = require('lodash');
var fs = require('fs');

module.exports = function(options) {
  'use strict';

  options = options || {};

  var instance = {
    options: _.defaults(options, {
      host: '0.0.0.0',
      port: process.env.PORT || 8000,
      staticDir: __dirname + '/../public'
    }),
    appInstance: null,
    httpInstance: null,
    socketInstance: null,
    socketClients: []
  };

  instance.start = function(done) {
    var appInstance = instance.appInstance = express();

    appInstance.set('title',  'Pebble{code} Server');
    appInstance.set('port',   instance.options.port);
    appInstance.set('host',   instance.options.host);

    // These replace express.bodyParser()
    appInstance.use(express.urlencoded());
    appInstance.use(express.json());

    appInstance.use(express.methodOverride());
    appInstance.use(appInstance.router);
    appInstance.use(express.static(instance.options.staticDir));


    appInstance.get('/ads/*', function(req, res) {
      fs.createReadStream(__dirname + '/../public/index.html').pipe(res);
    });

    appInstance.get('/', function(req, res) {
      fs.createReadStream(__dirname + '/../public/index.html').pipe(res);
    });

    instance.createHTTPServer(done);
  };

  instance.createHTTPServer = function(done) {
    var HTTPServer = http.createServer(instance.appInstance);
    HTTPServer.listen(instance.options.port, instance.options.host, function() {
      done();
    });
  };

  return instance;
};
