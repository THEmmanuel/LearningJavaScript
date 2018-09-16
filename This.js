var a = 4;
var b = 5; 

function add(c, d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3}
add.call(o, 5, 7);
//Call accepts a list
add.apply(0, [10, 20]);
//Aplly accepts an array
