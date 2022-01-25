const btn = this.document.querySelector('#btn')
const {Menu,BrowserWindow} = require('@electron/remote')

window.onload = function(){
    btn.onclick = () =>{
        newWin = new BrowserWindow({
            width:500,
            height:500,
            webPreferences:{
                // 开启node
                nodeIntegration: true,
                contextIsolation: false,
                }
        })
        newWin.loadFile('yellow.html')
        newWin.on('close',()=>{
            newWin=null
        })
    }
}

const {remote}=require('electron')

var rightTemplate = [
    {label:'粘贴',accelerator:'ctrl+c',},
    {label:'复制',accelerator:'ctrl+v',},
]

var m = Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    m.popup()
})