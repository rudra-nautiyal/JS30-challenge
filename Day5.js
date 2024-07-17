// Day 5 -  Functions

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("The number is Even\n");
  } else {
    console.log("The number is Odd\n");
  }
}

function square(number) {
  console.log(number * number + "\n");
}

function cube(number) {
  console.log(number * number * number + "\n");
}

function comparison(num1, num2) {
  if (num1 > num2) {
    console.log(`The greater number is ${num1}`);
  } else if (num2 > num1) {
    console.log(`The greater number is ${num2}`);
  } else {
    console.log("Both are equal numbers.");
  }
}

function concatenate(str1, str2) {
  console.log("\n" + str1 + " " + str2 + "\n");
}

let functionAdd = (a, b) => console.log(a + b + "\n");
let functionCheck = (word, char) => console.log(word.includes(char) + "\n");

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  console.log(a * b + "\n");
}

function greeting(name, age) {
  age = typeof age != "undefined" ? age : "not given to us.";
  console.log(`Hello, ${name}! You age is ${age}.` + "\n");
}

function functionName(name) {
  return name;
}

function functionNumber(number, func) {
  for (let i = 0; i < number; i++) {
    console.log(`${i + 1}: ${func("Rudra Nautiyal")}`);
  }
}

function squaring(number) {
  return number * number;
}

function cubing(number) {
  return number * number * number;
}

function higherOrderFunction(number, func1, func2) {
  let result = func1(number);
  console.log("\n");
  console.log(
    `Upon squaring and then cubing the number we get: ${func2(result)}`
  );
}

let number = 10;

let num1 = 20;
let num2 = 30;

let str1 = "Rudra";
let str2 = "Nautiyal";

let word = "Arshaad Azaad";
let char = "Z";

let lowerCasedWord = word.toLowerCase();
let lowerCaseChar = char.toLowerCase();

let name = "Rudra Nautiyal";
let age = 19;

evenOrOdd(number); // Task 1
square(number); // Task 2
comparison(num1, num2); // Task 3
concatenate(str1, str2); // Task 4
functionAdd(num1, num2); // Task 5
functionCheck(lowerCasedWord, lowerCaseChar); // Task 6
multiply(10); // Task 7
greeting(name, age); // Task 8
functionNumber(3, functionName); // Task 9
higherOrderFunction(2, squaring, cubing); // Task 10
