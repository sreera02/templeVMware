const {app, BrowserWindow} = require('electron');
    path = require("path"),
    url = require("url");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({

    });

    mainWindow.loadURL(url.format({
        pathname: path.join( __dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
    
}