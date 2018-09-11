//Array declarations should be started with a Square bracket
var jollofRice = ["Rice", "Maggi", "Salt", "Oil", "Curry"];

//Array nesting
//Arrays can be stored in other arrays

var cars = [["Mercedes", 10], ["Jaguar", 8], ["BMW", 8] ["Mazda", 5]]
console.log(jollofRice [3]);

jollofRice[1] = "Chicken";
console.log(jollofRice);

console.log(cars[1][0])

jollofRice.forEach(function(element){
    console.log(element);
})

//Array Methods
//
//
var Array1 = ["a", "b", "c", "d", "e"];

//push()
//This method adds new elements to the end of the array
//e.g
Array1.push("f");
console.log(Array1);

//pop()
//pop removes the last method in an array and returns it
console.log(Array1.pop());
console.log(Array1);

var Array2 = ["t", "u", "h"];

//concat()
//concat merges two arrays
console.log(Array1.concat(Array2))

//join()
//this joins all the elements in an array to create a string and also dosen't modify the original array
console.log(Array1.join(" "));

//reverse()
//This "reverses the elements in an array"
console.log(Array1.reverse());

//shift()
//This removes the first element in the array and returns it
console.log(Array1.shift());
//It's "e" because the first element has been reversed

//unshift()
//Adds an element to an array and returns the length of the new array
console.log(Array1.unshift("y"));
console.log(Array1);

//slice()
//slice selects part of an array and returns the selected array without modifying the original array
//Takes in the starting and the ending point of the array
//The original array remains unmodified
console.log(Array1.slice(2,4));

//sort()
//sort returns the array in alphabhetical order
console.log(Array1.sort());

//splice()
//splice is similar to slice, the only difference is that splice is going to modify the original array
console.log(Array1.splice(2 , 2, "JavaScript"))
console.log(Array1);

//
//Copying / Cloning arrays
var originalArr = [true, true, undefined, false, null];

//slice
//Arrays are commonly copied with the slice method
//slice is usually used to break arrays, but it can also be used to copy an entire array
var copyArr = originalArr.slice(0);
console.log(copyArr)

//spread operators
//spread operators are made by adding three dots before the array to be copied
var copyArr2 = [...originalArr];
console.log(copyArr2, copyArr)

//DEEP copying
//Deep copying is used when theres an array or an object in your array
var deepArr = [["JavaScript"]];
var shallowArr = deepArr.slice(0);

shallowArr[0].push(" is so effin cool")
console.log(deepArr[0], shallowArr[0])

