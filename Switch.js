//Switch statements are used to perform different actions based on different conditions

let Day;
switch (new Date().getDay()){
    case 1:
        day = "Sunday";
        break

    case 2:
        day = "Monday";
        break;

    case 3: 
        day = "Tuesday";
        break;

    case 4:
        day = "Wednesday";
        break;

    case 5:
        day = "Thursday";
        break;

    case 6: 
        day = "Friday";
        break;

    case 7:
        day = "Saturday";
        break;
}
console.log(day);


//////////////////////////////////////////


var Animal = "Dog"
switch(Animal){
    case "Dog":
    case "Cat":
    case "Goat":
    case "Chicken":
    console.log(Animal, "Is a domestic animal");
    break;

    case "Car":
    console.log("A car is not an animal!!!");
    break;

    case null:
    console.log("There's no animal selected")

    default:
    console.log("Your animal is wild or invalid")
}