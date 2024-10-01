for(var i = 0; i < 3; i++){
    //task search in arrays
   var arr1 = [ 67 , 87 , 27 , 17]
   var arr2 = parseInt(prompt("Enter number"));
   for(var x = 0; x < arr1.length; x++){
       console.log(arr1[x])
       if(arr1[x] === arr2){
           console.log("It Belongs to array "+arr2)
       }
   }




var num = 7;
for(var i = 1; i<=10 ; i++){
    console.log( num +" * "+i+ " = " + (num * i)) 
}


for(var i = 5; i<10 ; i++){
    if(i==6){
        break;
    }
    alert("I = "+i);
}

for(var n = 5; n<10 ; n++){
    if(n==8){
        continue;
    }
    console.log("N = "+n);
}



var num1 = parseInt(prompt("Enter Number"));

for(x = 2; x < num1;x++){
    var result = num1 % x;
    if(result == 0){
        console.log("This is not a Prime number");
        break;
    } else{
        console.log("This is a Prime number");
    }
}


var date = new Date();
console.log(date)



var food = ["pizza" , "burgir" , "pasta"];
console.log(food)
food[3] = "fries";
food[4] = "shawarma"
console.log(food[0])
console.log(food[3])
console.log(food[4])

var table = parseInt(prompt("Enter any number to display its table upto 10 times"));
for(var j = 1;j<=10;j++){
    console.log(table +" * "+j+ " = " + (table * j))
}

//push function for adding element easily with proper sequence
var drinks = [];
drinks.push("Coke");
drinks.push("Margarita" , "Shot");
drinks.push("Soda");
document.write(drinks[2]);
   
        
for(var j = 0; j < 5 ; j++){
        console.log(" I = "+i+" J = "+j);
    }
}

//random access in an array
var vegetables = ["capsicum" , "ginger"]
alert(vegetables[1]);
vegetables[1] = "potato"
alert(vegetables[1]);

//stack , it is LIFO //length displays numbers of elements of an array 
var fruits = []
fruits.push("mangoes")
fruits.push("apple")
fruits.push("banana")
console.log(fruits);
console.log("Length = "+fruits.length)
fruits.pop();
fruits.pop();
console.log("Length = "+fruits.length)

//queue , it is FIFO //unshift is used to add elements at start of an array
var abstract = []
abstract.push("love")
abstract.push("care")
abstract.push("hatred")
abstract.push("respect")

alert(abstract);
abstract.shift();
alert(abstract);
abstract.unshift("vision")
alert(abstract);

//loop in an array
var names = [" saqlain " , " atif " , " nauman "]
for(var k = 0;k < names.length; k++){
    document.write(names[k]);
} 


var arr = [11,22,33,44,55]
var input = parseInt(prompt("Enter Number"))
console.log("Input is "+input)

for(var i =0; i < arr.length; i++){
    console.log(arr[i])
    if(arr[i] === input){
        console.log("Found in array "+input)
    }
}

//splice function used to add elements in middle of array and to replace elements of array
var arr3 = [" pasta " , " pizza ", " burger "]
console.log(arr3)
arr3.splice(1,0," fries "," shawarma ")
document.write(arr3)
//in splice where we write 1,2 means new element gonna add at index 1 and replace 2 elements
var arr4 = ["corolla" , "alto" , "city" , "civic"]
console.log(arr4)
arr4.splice(1,2,"LC 200")
console.log(arr4)


//slice function you can compose a new array from already existing array
var arr4 = ["corolla" , "alto" , "city" , "civic"]
console.log(arr4)
var arr5 = arr4.slice(1,2)
console.log(arr5)
 




