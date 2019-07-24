var jsBox = document.getElementById("box")
var jsPic = document.getElementById("pic")
var jsLeft = document.getElementById("left")
var jsRight = document.getElementById("right")
var jsList = document.getElementsByTagName(("li"))

function startTimer() {
    currentPage++
    changePage()
}

//第一个li设置为红色
jsList[0].style.backgroundColor = "red"

var currentPage = 1
//启动一个定时器去更新图片
var timer = setInterval(startTimer,1000)

function changePage() {
    if(currentPage == 4) {
        currentPage = 1
    }else if(currentPage == 0){
        currentPage = 3
    }


    jsPic.src = "img/"+currentPage+".png"

    for(var i = 0; i < jsList.length; i++){
        jsList[i].style.backgroundColor = "#aaa"
    }

    jsList[currentPage-1].style.backgroundColor = "red"
}

//添加鼠标与box之间的交互
jsBox.addEventListener("mouseover",overFunc,false)

function overFunc() {
    clearInterval(timer)
    //显示左右按钮
    jsLeft.style.display = "block"
    jsRight.style.display = "block"
}

jsBox.addEventListener("mouseout",outFunc,false)

function outFunc() {
    timer = setInterval(startTimer,1000)
    //隐藏左右按钮
    jsLeft.style.display = "none"
    jsRight.style.display = "none"
}

//左右按钮颜色加深
jsLeft.addEventListener("mouseover",highlight,false)
jsRight.addEventListener("mouseover",highlight,false)

function highlight() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)"
}

//左右按钮颜色变浅
jsLeft.addEventListener("mouseout",dark,false)
jsRight.addEventListener("mouseout",dark,false)

function dark() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)"
}

//左右按钮点击事件
jsLeft.addEventListener("click",function () {
    currentPage--
    changePage()

},false)

jsRight.addEventListener("click",function () {
    currentPage++
    changePage()
},false)


//为列表标签绑定对应的图片、点击事件
for(var i = 0; i < jsList.length ; i++){
    jsList[i].index = i+1
    jsList[i].addEventListener("mouseover",function () {
        currentPage = parseInt(this.index)
        changePage()
    },false)
}
//为每个列表绑定监听事件


