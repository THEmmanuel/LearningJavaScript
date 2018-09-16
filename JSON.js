//JavaScript object Notation
//Data  is in named value pairs
//
var myJSON = {
    "name": {
        "first": "Emmanuel",
        "last": "Ayodele"
    },
    "age": 18,
    "skills": ["coding", "gaming", "Model-Making"],
    "married":false,
    "superpowers": null
}

//Stringify method
var stringify = JSON.stringify(myJSON);
console.log(stringify);

//parse method
var stringJSON = '{"name": "Emmanuel", "kids": 0, "state": "Osun"}';
var jsonParse = JSON.parse(stringJSON);
console.log(jsonParse);