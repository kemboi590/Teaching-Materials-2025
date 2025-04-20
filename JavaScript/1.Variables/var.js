// var keyword - used to declare a variable
// The var keyword in JavaScript is used to declare variables. It was the primary way to declare variables before the introduction of let and const in ES6

// x-tics of var keyword
// 1. Function Scope - Variables declared with var are scoped to the function in which they are declared. If declared outside a function, they are globally scoped.
function VarFunc() {
    var x = 10; // x is scoped to this function
    console.log(x) //10
}
// console.log(x) //ReferenceError: x is not defined



// 2. Hoisting
// Variables declared with var are "hoisted" to the top of their scope. 
// This means the declaration is moved to the top of the scope during the execution phase, but the initialization remains in place.

console.log(a) //undefined
var a = 5;



// 3. No Block Scope 
// Unlike let and const, var does not have block scope. It ignores block boundaries (e.g., inside if or for blocks) 
// and is scoped to the enclosing function or global scope.

let canVote = true;
if (canVote) {
    var age = 18; // 'age' is declared with 'var' and is function-scoped
    console.log("You can vote, age is: " + age); // 18
}
console.log("Age outside block is: " + age); // 18, 'age' is accessible here because of var's function scope