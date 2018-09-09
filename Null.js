// Null vs Undefined
// Null and undefined are both datatypes
//Unddefined means a variable has been declared but a value has not yet been assigned to it

var myVar;
console.log(myVar);
//This should return undefined because there's no value assigned to it.

myVar = null;
//Null means that the variable has no value
//A variable without a value is set to undefined by default but a null variable must be defined specifically
console.log(myVar);

console.log(null === undefined);
// ==== is called the identity operator
//This should return false because null and undefined are not the same data type

console.log(null == undefined);
//This is true because they both mean no value.

///console.log(0 == null)



