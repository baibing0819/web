
//时间
var d1 = Date()         //获取当前时间
var d2 = new Date("2019-7-2")     //方法二，该方法可以用来设置时间
console.log(d1)
console.log(d2)

//时间对象对应的方法 get set....
console.log(d2.getDate())

var str = d2.toLocaleString()
console.log(str)        //转换时间显示格式

var str1 = d2.toLocaleDateString()
console.log(str1)

var str2 = d2.toLocaleTimeString()
console.log(str2)