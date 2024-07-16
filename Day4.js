// Day 4 - Loops

const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Task 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log("\n");

// Task 2
for (let j = 1; j <= 10; j++) {
  console.log(`5 x ${j} = ${5 * j}`);
}

console.log("\n");

// Task 3
let k = 1;
let sum = 0;

while (k <= 10) {
  sum += k;
  k++;
}

console.log(sum);
console.log("\n");

// Task 4
let l = 10;

while (l > 0) {
  console.log(l);
  l--;
}

console.log("\n");

// Task 5
let m = 1;

do {
  console.log(m);
  m++;
} while (m < 6);
console.log("\n");

// Task 7
let star = "*";
for (let n = 1; n < 6; n++) {
  console.log(star.repeat(n));
}
console.log("\n");

// Task 8
for (let o = 0; o < 11; o++) {
  if (o === 5) continue;
  console.log(o);
}
console.log("\n");

// Task 9
for (let p = 0; p < 11; p++) {
  if (p === 7) break;
  console.log(p);
}

// Task 6 (Done at last as it requires user input)
terminal.question(
  "\nFactorial Calculator\nPlease enter a number: ",
  (input) => {
    let randomNumber = parseFloat(input);
    let factorialValue = 1;
    do {
      factorialValue = randomNumber * factorialValue;
      randomNumber--;
    } while (randomNumber > 0);
    console.log(factorialValue);
  }
);
