var myCar = new Object();
myCar.make = "Mercedes Benz"
myCar.model = "G-Class"

//Properties can be acessed with the dot notation
//Properties can also be acessed by using bracket notation

myCar["Year"] = 2017;
console.log(myCar ["model"])

function showProps(obj, objName){
    var result = "";
    for (var i in obj){
        if (obj.hasOwnProperty(i)){
            result += objName + "." + i + " = " + obj[i] + "/n"
        }
        return result;
    }
}

//Creating an object

//Object initializer
var myMazda = {color: "red", wheels: 4, engine:{cylinders: 4, size: 1.8}};

//Constructor function
function Car (make, model, year){
this.make = make;
this.model = model;
this.year = year;
//This means we are talking about this object
}

var mycar = new Car("Isuzu", "Trooper", 1999);
var anothercar = new Car("Lexus", "RX 300", 2005);
console.log(mycar.model);
anothercar.color = "Grey"
console.log(anothercar.color);

//Object.create
//A mehod is a property of an object that is a function

var Animal = {
    type: "Vertebrates",
    displayType:function(){
        console.log(this.type);
    }
}

var animal_x = Object.create(Animal);
animal_x.displayType();

var fish = Object.create(Animal);
fish.type = "Pisces";
fish.displayType();

//Using Objects for lookups

var germanCars = {
1: "Mercedes Benz",
2: "BMW",
3: "Audi",
4: "VolkWagen"
}
console.log(germanCars[3]);

//Remove Object Properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes)

//Testig objects for properties
console.log(dishes.hasOwnProperty("plates"));
console.log(dishes.hasOwnProperty("cups"))

//Acessing and modifying nested objects
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer".folder2]);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

//Generate an array of All object keys
console.log(Object.keys(ourStorage));

 
