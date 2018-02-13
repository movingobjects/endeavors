
const { app, BrowserWindow } = require('electron');
const electronReload = require('electron-reload');

const server = require('./server');

const PORT = 3007;

let win;

electronReload(__dirname + '/app/build/');

server.start(PORT, initApp);

function initApp() {

  app.on('ready', () => {

    win = new BrowserWindow({
      width: 1100,
      height: 750,
      minHeight: 750,
      minWidth: 1100,
      backgroundColor: '#222',
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nativeWindowOpen: true
      }
    });

    win.loadURL(`http://localhost:${PORT}`);

  });

  app.on('window-all-closed', () => {

    app.quit();

  });

}
