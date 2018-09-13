//For loops are one of the most commonly used loops in JavaScript
//A for loop runs the code for a certain number of times 

/*for ([initialization]; [condition]; [final expression]){
    code that is going to be looped
    the in
}
*/

var arr = [];
for (var i = 0; i < 7; i++){
    //A break statement can also be used to "break" out of the loop early
    if(i > 2) break;
    arr.push(i);
}
console.log(arr)

var arr2 = [4, 7, 9, 2, 3];
//Loops can also iterate through arrays
//While the value of i is less than the length of arr2, increment i.
for(var i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

//To iterate through multi-dimensional arrays
var arr3 = [[1,2], [3,4], [5,6]];
for (var i = 0; i < arr3.length; i++){
    for (var j = 0; j < arr3[i].length; j++){
        console.log(arr3[i][j]);
    }
}
