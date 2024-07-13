// Day 1 - Variables and Data Types

var randomNumber = 24; // Task 1
let randomString = "Rudra Nautiyal"; // Task 2
const randomboolean = Boolean(1); // Task 3


console.log(randomNumber, randomString, randomboolean);

let datatypeNumber = 2004; // Task 4
let datatypeString = "September"; // Task 4
let datatypeBoolean = false; // Task 4
let datatypeObject = {firstName:"Arshaad", lastName:"Azaad"}; // Task 4
let datatypeArray = ["Aston Martin", "Bentley", "Bugatti"]; // Task 4

console.log(
    "datatypeNumber: " + typeof datatypeNumber + "\n" +
    "datatypeString: " + typeof datatypeString + "\n" +
    "datatypeBoolean: " + typeof datatypeBoolean + "\n" +
    "datatypeObject: " + typeof datatypeObject + "\n" +
    "datatypeArray: " + (Array.isArray(datatypeArray) ? "array" : typeof datatypeArray)
  );

var firstValue = 1948; // Task 

console.log(firstValue);

var firstValue = 1947;

console.log(firstValue);

// Feature Request - 1

var randomDataType = [datatypeBoolean, datatypeNumber, datatypeString, datatypeObject, datatypeArray];

const random = Math.floor(Math.random() * randomDataType.length);

declaredDataType = randomDataType[random];

console.log(declaredDataType, Array.isArray(declaredDataType) ? "array" : typeof declaredDataType);



// Feature Request - 2

let randomVariable = "This can be changed!";
const fixedVariable = "This can't be changed!";

console.log(randomVariable, '(Declared using let)')
console.log(fixedVariable, '(Declared using const)')

randomVariable = "The text has now been changed!";

// fixedVariable = "Changing this shall throw and error.";

console.log(randomVariable, '(Declared using let)');