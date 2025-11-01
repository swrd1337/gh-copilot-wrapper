const { app, BrowserWindow, screen } = require('electron');

app.whenReady().then(() => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const win = new BrowserWindow({
    width: width / 1.5,
    height: height / 1.5,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    icon: __dirname + '/static/github.ico',
    autoHideMenuBar: true,
    webPreferences: {
      webviewTag: true,
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#161616',
      symbolColor: '#b3b3b3',
      height: 32,
    },
  });
  win.loadFile('index.html');
  // win.webContents.openDevTools({ mode: 'detach' });
});
