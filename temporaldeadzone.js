// Temporary Dead Zone
// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. 
// In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when the variable is in the Temporal Dead Zone is the time between the variable hoisting and its actual declaration.
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b);
console.log("kkkk");
let a=10;
var b=10;
console.log(a);
console.log(b);