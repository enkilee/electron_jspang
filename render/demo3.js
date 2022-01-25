var {shell} = require('electron')

var aHref = document.querySelector('#aHref')

aHref.onclick= function(e){
    e.preventDefault();
    var href = this.getAttribute('href')

    shell.openExternal(href)
}

var mybtn = document.querySelector('#mybtn')

mybtn.onclick = function(e){
    window.open('./popup_page.html')
}

//子父页面传递信息
window.addEventListener('message',(msg)=>{
    let mytext=document.querySelector('#mytext')
    mytext.innerHTML=JSON.stringify(msg.data)
})