//replace() replaces the selected text
// /g is used to replace all same words case sensitive
// /i is used to replace all same words case insensitive
var a = "It is what it is"
var b = a.replace(/it/gi,"hello")
alert(b)

//charAt() is used to display a specific thing from string
var a = "tibetin mastiff and pitbull"
var b = a.charAt(20,21,23)
alert(b)

//split func is used mainly for spacing 
var a = "to,be or|not to,be "
var b = a.split(" ")
var c = a.split(",")
var d = a.split("|")
console.log(b)
console.log(c)
console.log(d)

//rounded() is used to round off decimal values
var a = (34+54+87)/3
var b = Math.round(a)
alert("Average is: "+b)
//ceil() func returns the smallest integer greater than or equal to a given number
//floor() func returns the largest integer less than or equal to a given number 
var a = Math.ceil(4.1)
var b = Math.floor(4.7)
console.log(a)
console.log(b)

//random() used to display any random value
var a = Math.random()
console.log(a)
var b = a*6
console.log(b)
var c = Math.ceil(b)
console.log(c)

//tofixed() is used to control decimal values 
var a = (98+55)/2
var b = a.toFixed(2)
alert(b)


var a = "you want what ?"
var b = a.indexOf("want")
alert(b)

//lastindexof() is used to consider last occurrence of that thing in string
var a = "i hate this hate feeling"
var b = a.lastIndexOf("hate")
alert(b)


var a = "Hello World"
var b = a.slice(-9)  
console.log(b) 


var a = "Hello\'World"
var c = "Hello\nWorld"
var d = "Hello\tWorld"
console.log(a)
console.log(c)
console.log(d)


var food = "pizza"
var food1 = "piZZa"
if(food.toLowerCase() === food1.toLowerCase()){
    document.write("Matched")
}else{
    document.write("Not Matched")
}

var date = new Date("2023/7/3 11:59:59")
alert(date)

//date in detail
var date = new Date("July 4 2006 11:59:59")
console.log(date)
console.log("Year "+date.getFullYear())
console.log("Date "+date.getDate())
console.log("Month "+date.getMonth())
console.log("Minutes "+date.getMinutes())


var date = new Date("July 4 2006 11:59:59")
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getMinutes())

date.setDate(12)
date.setMonth(0)
console.log(date)







