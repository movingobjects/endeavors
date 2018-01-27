
const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname + '/app/build/');

let win; // (prevents garbage collection)

app.on('ready', () => {

  win = new BrowserWindow({
    width: 1000,
    height: 1000,
    frame: true
  });

  win.loadURL(`file://${__dirname}/app/build/index.html`);

});

app.on('window-all-closed', () => {

  app.quit();

});
