
const { app, BrowserWindow } = require('electron'),
      electronReload         = require('electron-reload');

const server = require('./server');

const PORT     = 3007,
      PATH_WIN = `http://localhost:${PORT}`;

let win;

electronReload(PATH_WIN);

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

    win.loadURL(PATH_WIN);

  });

  app.on('window-all-closed', () => {

    app.quit();

  });

}
