//Random Numbers
//

//Generates a random number between 0 and 15..... Add one after the max value
console.log(Math.floor(Math.random() * 16));


//Function that generates a random number from a given range
//Fuction takes in a minimum and maximum number as input parameter

function RangedRamdom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Prints out a random number between 4 and 9
console.log(RangedRamdom(4, 9));

//parseInt
//Parse int takes a give string and converts it to a number
//This converts 00078 to 78
console.log(parseInt("00078"))
//You can also pass in a second argument which is the base of the number
console.log(parseInt("1101", 2))
//1101 in binary is 13 in Base 10