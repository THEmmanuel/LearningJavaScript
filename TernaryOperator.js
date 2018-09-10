//The ternary operator is the only operator that takes three operands
//It's a shortcut for an if statement, it tests a condition and returns one value if it is true and another if it is false

//condition ? expr1 : expr2

var age = 10;
console.log((age >= 18) ? "You are an adult" : "You are a kid");

var stop;

age >= 18 ? (
    console.log("Welcome to the club"), 
    stop = false) : (
        console.log("You are not allowed to enter")
    ), (
        stop = false)



