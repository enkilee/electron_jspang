var electron = require('electron')


var app = electron.app
var BrowserWindows = electron.BrowserWindow

var mainWindow = null
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']='true'

app.on('ready',function(){
    mainWindow=new BrowserWindows({
        width:300,
        height:300,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            enableRemoteModule:true
        }
    })
    require('./main/menu.js')
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(mainWindow.webContents)
    mainWindow.loadFile('demo3.html')
    mainWindow.openDevTools() //打开调试模式
    mainWindow.on('closed',()=>{
        mainWindow=null
    })
    
})