const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  // Strip frame-blocking headers
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const headers = details.responseHeaders;
    delete headers['X-Frame-Options'];
    delete headers['x-frame-options'];
    if (headers['Content-Security-Policy']) {
      headers['Content-Security-Policy'] = headers['Content-Security-Policy'].map(policy =>
        policy.replace(/frame-ancestors [^;]+;?/gi, '')
      );
    }
    callback({ responseHeaders: headers });
  });

  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL('https://discord.com/channels/@me');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
