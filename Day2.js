// Day 2 - Operators

let firstNumber = 928;
let secondNumber = 525;
let thirdNumber = 525;
let fourthNumber = -200;

console.log("Addition: " + firstNumber + secondNumber); // Task 1
console.log("Subtraction: " + (firstNumber - secondNumber)); // Task 2
console.log("Multiplication: " + firstNumber * secondNumber); // Task 3
console.log("Divison: " + firstNumber / secondNumber); // Task 4
console.log("Remainder: " + firstNumber % secondNumber); // Task 5

firstNumber += firstNumber; // Task 6
secondNumber -= secondNumber; // Task 7

console.log(firstNumber, secondNumber);

biggerNumber = firstNumber > secondNumber; //Task 8
smallerNumber = firstNumber < secondNumber; // Task 8

console.log("Is firstNumber bigger than secondNumber? " + biggerNumber);
console.log("Is firstNumber smaller than secondNumber? " + smallerNumber);

equalNumber = secondNumber >= thirdNumber; // Task 9

console.log("Is secondNumber equal to thirdNumber? " + equalNumber);

randomVariable = "100"; // Task 10
randomVariable2 = 100; // Task 10

comparsionVariable = randomVariable == randomVariable2;
comparsionVariable2 = randomVariable === randomVariable2;

console.log("For ==: " + comparsionVariable);
console.log("For ===: " + comparsionVariable2);

console.log(firstNumber > secondNumber && secondNumber === thirdNumber); // Task 11
console.log(firstNumber === secondNumber || secondNumber < firstNumber); // Task 12
console.log(firstNumber != secondNumber); // Task 13

function signCheck(inputNumber) {
    return inputNumber < 0 ? "Negative Number" : "Positive Number";
}

console.log(signCheck(fourthNumber)); // Task 14