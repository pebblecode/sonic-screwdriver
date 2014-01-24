var ServerInstance = require('./lib')();

ServerInstance.start(function() {
  console.log('Server instance started on ' + ServerInstance.options.host + ':' + ServerInstance.options.port);
});
