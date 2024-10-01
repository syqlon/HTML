var items = ["cakes" , "cookies" ,"chips" ,"patties"]
var input = prompt("Welcome to Bakery . What do you want Sir/Madam ?")
for(var i =0; i < items.length; i++){
    if(items[i] === input){
    console.log(input+" is available at Index "+i)
        break;
    }
    else{
        console.log(input+" Sorry Not Available")
    }
}

var num = [27,48,1,56,13]
num.sort()
console.log(num)

for(var count = 0; count<= 15; count++){
    console.log("Counting: "+count)
}

for(var revcount = 10 ; revcount>=0 ; revcount--){
    console.log("Reverse Counting: "+revcount)
}

for(var even = 0; even <= 20 ; even+= 2){
    console.log("Even: "+even)
}

for(var odd = 1; odd <= 20 ; odd+= 2){
    console.log("Odd: "+odd)
}

for(var h = 2; h<=20 ; h+= 2){
    console.log("Series: "+h+"k")
}

var a = [10,20,4,40,60,70,]
var b = [1,2,3,4,5,6,7,8,9]
var c = b+a;
var d = [... new Set(c)];
console.log(c)

var dup = [2,"a",7,7,"b","c","a"]
var uniqueDup = [... new Set(dup)]
console.log(uniqueDup);

var colors = ["black " , " white "," green "," pink "]
document.write(colors)
var input = prompt("Enter color you want to add")
colors.push(input)
console.log(colors);

