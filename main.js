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

    //BrowserView
    //嵌入子窗口
    // var BrowserView = electron.BrowserView
    // var view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({
    //     x:0,y:120,width:1000,height:680
    // })
    // view.webContents.loadURL('https://jspang.com')

    //window.open
    //打开子窗口
    

    mainWindow.on('closed',()=>{
        mainWindow=null
    })
    
})