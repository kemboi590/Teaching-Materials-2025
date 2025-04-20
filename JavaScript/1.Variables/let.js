// Variables: let, const, and var

// let: block-scoped variable
let x = 10;
x = 20;


console.log("value of x is: " + x); 


//BLOCK SCOPE
// function BlockScopeVariables(){
//     let x = 10; // 'x' is declared in the function scope
//     console.log("Outside block, x is:", x); // 10

//     if (true) {
//         let x = 20; // This 'x' is block-scoped to the 'if' block
//         console.log("Inside block, x is:", x); // 20
//     }

//     console.log("Outside block again, x is:", x); // 10
// }