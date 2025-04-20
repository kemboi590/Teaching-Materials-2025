// JavaScript has only one type of number. Numbers can be written with or without decimals.
let x = 10; // a number without decimals
const pie = 3.14 //A number with decimals


// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

// If you add two numbers, the result will be a number:
let a = 10;
let b = 12
let z = a + b
let typeOfZ = typeof (z)

console.log("sum of z " + z + " and the type is " + typeOfZ)

// If you add two strings, the result will be a string concatenation:
let c = "10";
let d = "12"
let e = c + d
let typeOfE = typeof (e)

console.log("sum of e " + e + " and the type is " + typeOfE)

// If you add a number and a string, the result will be a string concatenation
let a1 = "10";
let a2 = 20
let sum = a1 + a2
let typeOfSum = typeof (sum)

console.log("sum of a1 and a2 " + sum + " and the type is " + typeOfSum)

let x1 = 10;
let y1 = 20;
let z1 = "The result is: " + x1 + y1; 
// let z1 = "The result is: " + (x1 + y1);
console.log(z1)


// https://www.w3schools.com/js/js_numbers.asp