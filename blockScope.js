// Block Scope and Shadowing in Javascript
// Block Scope is the scope of variables defined inside a block of code.
// In JavaScript, a block is defined by a pair of curly braces {}.
// Variables declared with let and const are block-scoped.
// Variables declared with var are function-scoped.
// Block Scope Example
// In the following example, the variable a is block-scoped to the if block.
if (true) {
    let a = 10;
    console.log(a); // 10
}
// console.log(a); // ReferenceError: a is not defined
// Shadowing Example
// In the following example, the variable a is shadowed by the variable b.
// let a = 10;
if (true) {
    let a = 20;
    console.log(a); // 20
}
// console.log(a); // 10
// In the above example, the variable a is shadowed by the variable b inside the if block. The variable a inside the if block is different from the variable a outside the if block.
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
// Shadowing
var a=100;
let b=200;
const c=300;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);