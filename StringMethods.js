var stringOne = "Hi, I'm Emmanuel, ";
var stringTwo = "I'm trying to learn JavaScript from freeCodeCamp";

//20 string methods

//charAt()

console.log(stringOne.charAt(0));
//This SHOULD show the first letter in the variable "stringOne" which is "H"

//charCodeAt()
//This returns the unicode of the character at the specified index
/**
 * A Unicode is an international encoding standard for use with different languages and scripts, by which each letter, symbol or digit
 * is assigned to a unique numeric value that applies across different platforms and programs
 * 
 * The unicode character for i for example is "105" so our code should output "105" 
 */

console.log(stringOne.charCodeAt(1));

 //concat();
 //concat function joins two or more strings and returns a newlhy joined string.

console.log(stringOne.concat(stringTwo));
//This should return "Hi, I'm Emmanuel, I'm trying to learn JavaScript from freeCodeCamp"

//endsWith();
//endsWith checks whether a string ends with a specified character or string

console.log(stringTwo.endsWith("freeCodeCamp"));
//This should return true because the second string ends with "freeCodeCamp".

console.log(stringTwo.endsWith("paidCodeCamp"));
//This should return false because its "freeCodeCamp" not "paidCodeCamp"

//fromCharCode
//This converts unicode characters to characters

console.log(String.fromCharCode(105));
//This should output the letter "i".

//Includes()
//This checks if a string contains a specified string or character e.g
console.log(stringOne.includes("Hi"));
//This should return true because stringOne contains "Hi".

//indexOf()
//This returns the first found occurence of the first value of a string
console.log(stringTwo.indexOf("from"));
//This should return "31" because the first occurence of "f" in "from" is "31"

//lastIndexOf()
//This returns the last found occurence of a given character or string

console.log(stringTwo.lastIndexOf("from"));
//This should also return "31" because "from" is also the last occurence in stringTwo.

//match()
//Mtach is going to search the string for the given string or character and then returns an array of the occurences
console.log(stringTwo.match(/learn/g))
//This should return an array with "learn" inside because learn was found only once in stringTwo

//repeat()
//repeat is going to return another string that "repeats" a specified string a number of specified times
console.log(stringOne.repeat(4));
//This should return stringOne four times

//replace()
//replace searches a string for a given string and then returns a new string with a new string
console.log(stringTwo.replace(/free/g , "paid"));
//this should replace "freeCodeCamp" with "paidCodeCamp" :(

//search()
//"search" searches a string for a specified value and then returns the position of the given value
console.log(stringTwo.search("JavaScript"));
//This should return "20" because the start position of "JavaScript" is 20.

//slice()
//slice extracts characters from a given index
console.log(stringOne.slice(8, 10))
//this should return "Em"

//split()
//split "splits" a string and then returns an array of strings with the splitted strings..... damn so many strings
console.log(stringTwo.split(" "));
//This should return every string in stringTwo as an array of strings

//startsWith()
//starts with checks whether a specified string starts with given characters and it returns with either true or false
console.log(stringOne.startsWith("Hi"));
//This should return true because dtringOne starts with "Hi"

//substr()
//substr is basically like slice but it starts from a given index and extracts the number of specified characters
console.log(stringOne.substr(8, 4));
//This should return Emma because it starts from index 8 and extracts a 4 letters

//substring()
//substring basically does the same thing as slice, it gets all the characters in between the two specified indices
console.log(stringTwo.substring(14, 19));
//This should return "learn"

//toUpperCase()
//This should self-explanatory, it changes all the letters to uppercase letters
console.log(stringTwo.toUpperCase());
//This changes all the alphabhetic characters in stringTwo to uppercase

//toLowerCase()
//This makes, well you guessed it, all the letters in a given string lowercase.
console.log(stringOne.toLowerCase());
//This returns the same string but everything is now in lowercase 

//trim()
//trim removes all the multiple spaces in a given string
var stringThree = "       Okay, Just some random string            "
console.log(stringThree.trim());
//This should return "Okay, Just some random string"


