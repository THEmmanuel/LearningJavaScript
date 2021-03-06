//a String or string literal is a series of Zero or more characters enclosed in quotes
var myName = "Emmanuel";
console.log(myName);
//This should output "Emmanuel"

//To use quotes in your string place A backslash at the end of the quotes
//Or you can use single quotes instead of double quotes
var sentence = "\"Te Amo!\" She said to me"
var sentence = '"Te Amo!" She said to me'
//The two sentences above do the same thing.
console.log(sentence);
//This should output " "Te Amo!" She said to me".

/**
 * Others include
 * \' for a single quote
 * \" for double quotes
 * \\ to add a backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed 
 */

 //You can concatenate or add two strings together with the "+" operator
 var myFullName = "Emmanuel " + "Ayodele";
 console.log(myFullName);
 //This should output Emmanuel Ayodele

 //Strings can also be concatenated with variables e.g
 console.log("My full name is " + myFullName);
 //This should output "My full name is Emmanuel Ayodele"

 console.log(myFullName += " is my effin name");
 //This should output "Emmanuel Ayodele is my effin name"...... Sorry for swearing :)

 //Strings [Bracket notation]
 //Most programming languages don't start counting at 0NE , they start at ZERO
 //This is refered to as Zero based index

 console.log(myName[0]);
 //This should output The first letter of myName which is "E"
 //Note that the zero can be changed to 1 or 2 etc
 //For example

 console.log(myName[1]);
 //This should output the second letter of myName which is "m"

 //To get the last character, You need to subtract one from the total length of the string
console.log(myName [myName.length - 1]);
//This should output the last character of myName which is "l"