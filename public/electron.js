// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // Security warnings

function createWindow() {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    
    width: 1366,
    height: 768,

    minWidth: 974,
    minHeight: 527,

    autoHideMenuBar: true,
    center: true,
    frame: true,

    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true, // Accessing devtools resources(Ctrl + Shift + i)
        webSecurity: true,
        preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

  // Create the browser window.
  
  ipcMain.on('calc-window:toggle', () => {
    const calcWindow = new BrowserWindow({

      maxWidth: 260,
      maxHeight: 480,

      width: 260,
      height: 480,
  
      minWidth: 260,
      minHeight: 480,
  
      autoHideMenuBar: true,
      center: true,
      frame: true,
      resizable: false,
  
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          devTools: true, // Accessing devtools resources(Ctrl + Shift + i)
          webSecurity: true,
          preload: path.join(__dirname, 'preload.js')
      }
    })
    calcWindow.loadURL("http://localhost:3000/calculator")
  })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here