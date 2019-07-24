//BOM(browser object model),一个用于访问浏览器和计算机屏幕的对象集合，我们可以通过全局对象window来访问这些对象


function func(){
    console.log("点我干啥！？")
    // window.location.reload()   //刷新页面,
    // window.location.reload(true)   //刷新页面,不带缓存
    window.location.assign("red.html")       //带有历史记录的跳转，可以后退
    // window.location.replace("red.html")     //不带历史记录，无法后退
    // window.location.href = "red.html"
}

function func1(){
    window.open("red.html","black",width="10px",height="10px",left="20px",top="0")
}

function func2(){
    window.close()
}


console.log(window.document)            //页面文档对象
console.log(window.frames)              //浏览器框架集合
console.log(window.navigator)           //浏览器描述信息
console.log(window.screen)              //浏览器以外的环境信息
console.log(window.location)
console.log(window.history)