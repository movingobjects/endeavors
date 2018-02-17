
const express = require('express'),
      http    = require('http'),
      path    = require('path');

module.exports.start = (port, callback) => {

  var appServer = express(),
      pathBuild = path.join(__dirname, 'build');

  appServer.use(express.static(pathBuild));

  http.createServer(appServer).listen(port, () => {
    if (typeof callback === 'function') callback();
  });

}
