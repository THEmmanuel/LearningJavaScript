//There are 7 major data types in javascript
//Boolean
//This is either true or false

var isTrue = false;
if (isTrue){
    console.log("isTrue is true, Yay!!");
}
else{
    console.log("isTrue is false");
}

//null
//null basically means no value
//if we try to do math with it, it's the same as 0

var x = null;
console.log(x * 55);       //This should output zero

//undefined
// undefined means that the variable hasn't been assigned yet

var y = undefined;
console.log(y * 85);        //This should output NaN (Not a Number)

//Number
//A number is.... well, a number

var numA = 6.85;
var numB = 7.0;
var numC = 2.8754;

console.log(numA + numB + numC);
//This should output 16.7254

//String e.g "Hello World"
var name = "Emmanuel";
var faveSong = "Take you down by Illenium";
console.log("Hi, My name is " + name + ", and My fave song is " + faveSong);
//This should output "Hi, My name is Emmanuel, and My fave song is Take you down by Illenium"


//Symbol
var sym1 = Symbol("House");
var sym2 = Symbol("House");

console.log (sym1 === sym2);
//This should be false
console.log (String(sym1) === String(sym2));
//This should be true

//Object
//Objects are collections of properties
//A property is an association between a name or a key and a Value
var myDreamCar = new Object;
myDreamCar.make = "Mercedes Benz ";
myDreamCar.model = "G Class";

console.log(myDreamCar.make + myDreamCar.model);
//This should output Mercedes Benz G Class