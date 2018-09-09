//if / else statements 

var isJavascript = true;


if(isJavascript){
    console.log("Yup, This language is JavaScript");
}
else{
    console.log("This language ain't JavaScript budday")
}

//The block of code above tests if isJavascript is true.
//If it is true, it says "Yup, This language is JavaScript"
//If isJavascript is false it says "This language ain't JavaScript budday"
//else means if the if statement is not true run the code in the else block instead

//COMPARISON OPERATORS
//< is Less than
//> is Greater than
//<= is Less than or Equal to
//>= is greater than or Equal to
//== is Equal to
//!= is Not Equal to



/**
 * Let's assume we are making an automated (ABRBPBY) "Age based road blocker powered by javascript" for a fully automated night club
 * The ABRBPBY checks people's age and allows them to enter if they are eighten
 * But if they are not eighteen it stops them from entering the club
 * **/
var age = 18
//The person's age

if(age >= 18){
    console.log("You are allowed to enter this club, Come on in!!!")
    //Since the guest is Eighteen, it allows them to enter
}
else if (age < 2){
    console.log("Awww cutie, What are you doing here?, where are your parents?")
    //Since the guest is still an infant, the ABRBPBY stops them from entering the club
    //Whats an infant doing in a club anyways
}

else if (age < 18){
    console.log("Come back when you are 18")
    //Since the guest is below 18 it prevents them from entering the club
}



//Test equals to and not equals tp
if (age == 18){
    // == means age is equals to 18 
    // note that a single = is an assignment operator
    console.log('You are "ateen" years, :) Pun totally intended')
}

if (age != 18){
     // != means age is not equal to
    console.log('You are not "ateen"')
}


//Difference between == and ===

// == tests for "abstract equality"
// It tests if the value and it dosen't test the data type 

// === tests for "Strict equality"
// the three equals sign tests if the value and the data type are the same thing

console.log(1 == "1")
//This should be true because they have the same value but not the same data type

console.log(1 === "1")
//This should be false because they have different datatypes "1" is a string

console.log("Hello" == new String("Hello"))
//This should be true because they have the same string literal value

console.log("Hello" === new String("Hello"))
//This should be FALSE because A string literal is different from a String object