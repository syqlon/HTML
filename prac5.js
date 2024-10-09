function showMessage(name){
    console.log("Hi "+name)
}
showMessage("Saqlain");
showMessage("Atif")

function mutiply(num1,num2){
    var num3 = num1*num2;
    console.log("Multiplication: "+num3)

}
mutiply(51,76);
mutiply(4,3)

// return function
function sum(num1,num2){
    return num1;
    return num1+num2;
    
}
var num3 = sum(6,6)
console.log(num3)

function num(score){
    if(score>=80 && score<=100){
        console.log("Grade A")
    }
    else if(score>=60 && score < 80){
        console.log("Grade B")
    }
    else if(score>=40 && score < 60){
        console.log("Grade C")
    }
    else{
        console.log("Fail")
    }
}
num(34)


function totscore(sub1,sub2,sub3){
    return (sub1+sub2+sub3)/3
}
function grades(score){
    if(score <= 100 && score >= 90){
        console.log("Grade A+")
    }
    else if(score < 90 && score >= 80){
        console.log("Grade A")
    }
    else if(score < 80 && score >= 70){
        console.log("Grade B")
    }
    else if(score < 70 && score >= 60){
        console.log("Grade c")
    }
    else if(score < 60 && score >= 40){
        console.log("Grade D")
    }
    else{
        console.log("Failed")
    } 
}
var score1 = totscore(34,56,89)
var score2 = totscore(76,56,81)
alert("Score1 = "+score1)
alert("Score2 = "+score2)
grades(score1)
grades(score2)


function sum(num1,num2){
    return num1+num2;

}
var a = sum(4,5)
alert(a)

function product(a,b){
    return a*b
}
function sum(num1,num2){
    return num1+num2
}
var c = sum(product(7,8),4)
alert(c)


var a = 7;
function sum(){
    var b = 8;
    var c = a+b;
    console.log(c)
}
sum()
var d = a+5;
alert(d)

//if variable is declared without var its global variable

//function can be used as expressions

var sum = function(a,b){
    return a+b;
}
var c = sum(3,4)
alert(c)

//function hoisting
var c = sum(67,42)
alert(c)
function sum(a,b){
    return a+b;
}

var arr1 = [45,56,67,78]
function val(num){
    console.log(num)
    num[2] = 65;
    console.log(num)
}
val(arr1)
console.log(arr1)


