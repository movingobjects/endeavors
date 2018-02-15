const express = require('express'),
      http    = require('http'),
      path    = require('path');


module.exports.start = (port, callback) => {

  var appServer = express();

  appServer.use(express.static(path.join(__dirname, 'build')));

  http.createServer(appServer).listen(port, () => {
    if (typeof callback === 'function') callback();
  });

}
