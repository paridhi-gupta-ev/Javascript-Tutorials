// Hoisting means we can access the variable and function before it is decalred and initialised.

console.log(x);
console.log(getName());
console.log(getName);
console.log(getName2);
console.log(getName2());

var x=10;
function getName(){
    console.log("Hello World");
}
var getName2 = () =>{
    console.log('yoooo');
}