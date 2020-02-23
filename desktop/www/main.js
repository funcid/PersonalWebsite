const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1920, 
        height: 1080, 
        icon: __dirname + '/img/icon.png',
        webPreferences: {
            nodeIntegration: false
        } 
    });
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});