'use strict';

var path = require('path');
var startSimulator = require('node-firefox-start-simulator');
var connect = require('node-firefox-connect');
var installApp = require('node-firefox-install-app');

var appPath = path.join(__dirname, 'app');

startSimulator().then(function(simulator) {
  connect(simulator.port).then(function(client) {
    installApp({
      appPath: appPath,
      client: client
    }).then(function(result) {
      console.log('Installed!');
    }, function(err) {
      console.error('ERROR: app not installed', err);
    });
  });
});
