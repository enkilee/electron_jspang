var electron = require('electron')


var app = electron.app
var BrowserWindows = electron.BrowserWindow

//快捷键
var globalShortcut = electron.globalShortcut

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

    //快捷键
    globalShortcut.register('ctrl+e',function(){
        mainWindow.loadURL('https://jspang.com')
    })
    let isRegister = globalShortcut.isRegistered('ctrl+e')?'Register Sucess':'Register Failed'
    console.log(isRegister)

    require('./main/menu.js')
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(mainWindow.webContents)
    mainWindow.loadFile('demo7.html')
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

app.on('will-quit',function(){
    //注销全局快捷键方法
    globalShortcut.unregister('ctrl+e')
    globalShortcut.unregisterAll()
})