var deploy = require('fxos-deploy/command');
var path = require('path');
var zipFolder = require('zip-folder');
var tmp = require('temporary');

var appDir = path.join(process.cwd(), 'app');
var manifestURL = path.join(appDir, 'manifest.webapp');
var tmpFile = new tmp.File();
var zipPath = tmpFile.path;

console.log(manifestURL, zipPath);

zipFolder(appDir, zipPath, function(err) {
	deploy({
		manifestURL: manifestURL,
		zip: zipPath,
		exit: true
	}, function(err, result, next) {
		console.error('finished: ', err);
		tmpFile.unlink();
		next(err);
	});
});
