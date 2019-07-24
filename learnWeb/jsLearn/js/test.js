console.log("in external file")
console.log("<h1>ice</h1>")
// alert("<h1>ice</h1>")
document.write( "<h1>ice</h1>")          /*能使标签具有作用，上面两个不可以*/

var num;
num = "a";
console.log(typeof(num));


var num1 = Infinity;
var num2 = NaN;
console.log(isNaN(num2))

var num3 = 1e308
console.log(num3)
var num4 = 1e309
console.log(num4)



console.log(parseInt("123"))     /*转换成整数*/


// 从外部接收输入

var num5 = parseInt(prompt("请输入一个整数："))
console.log(num5)

//创建数组
var arr = new Array()

arr[0]=1
arr[1]=2
arr[2]=3
arr[3]=4
arr[4]=5

arr.push(6)             //尾部插入
arr.unshift(7)      //头部插入
console.log(arr)
console.log(arr.pop())
console.log(arr.shift())
console.log(arr)

console.log(arr.reverse())
console.log(arr.join("sad"))

var arr1 = arr.slice(1,3)
console.log(arr1)

arr.splice(1,3,10,20)    //替换对应位置的数据
console.log(arr)

arr.splice(1,0,12,32,4,312,32)  //参数2为0时，表示从参数1位置开始插入数据
console.log(arr)

console.log(arr.indexOf(20))

// //即时函数
// (function (str) {
//     console.log(str)
// })("nice day.")


//字符串常用方法
var str1 = "white ice is a good man"
var str2 = new String("white ice is a good man ")

console.log(str1.charCodeAt(1))    //对应下标字符的ascii值
console.log(String.fromCharCode(20975))   //将对应ascii值转换成对应的str

var str3 = str1.replace("good","nice")
console.log(str3)

//还有split  join  ...