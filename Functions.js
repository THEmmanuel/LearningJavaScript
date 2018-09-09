//Functions are a set of statements that perform a certain task 
//Fuctions must be defined from the scope from which they are to be called

function square(number){
    return number * number;
    //returns the square of "number"
}
//Where the number in the curly braces is known as the input parameter
//Input parameters are variables that act as placeholders for  the values that are to be input into a function where it's called

console.log(square(7));
//7 is passed as in as the input parameter so the variable number is now 7
//The line above should print 49 to the console

var myCar = "Mustang"
//The variable myCar is a global variable because it is declared before a function
function myFunction(){
    var myCar = "Mercedes AMG G Klasse"
//Any variable declared in a function is known as a local variable and it can only be used by that function
    console.log(myCar);
}

//lets call the function now
myFunction();
//This should print "Mercedes AMG G Klasse" because it's a local variable

//Nesting functions i.e putting a function in a function
//A funtion declaration is always hoisted which means it can be called before the line where it is defined for example:
console.log(addSquares(2, 3));
//This should output 13


function addSquares(a, b){
    function square(x){
        return x * x;
    }
    return square(a) + square (b);
}
a = addSquares(4, 4);
b = addSquares (7, 4);
c = addSquares (8, 6);

/**Remember that I stated earlier that functions are always hoisted 
 * Well Hoisting means that function declarations are processed before any code is executed
 * That is declaring a function anywhere in the code is equivalent to declaring at the top
 * Variables too are always hoisted
 * Too make your code easier to read always declare variables above your function scope
 *  
 * **/