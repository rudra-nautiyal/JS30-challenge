// Day 6 -  Arrays

let array = [1, 2, 3, 4, 5];
let mapArray = array.map(double);
let evenArray = array.filter(even);
let reduceArray = array.reduce(sum);
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(array); // Task 1

console.log(array[0], array[4]); // Task 2

array.push(6); // Task 3
console.log(array);

array.pop(); // Task 4
console.log(array);

array.shift(); // Task 5
console.log(array);

array.unshift(1); // Task 6
console.log(array);

console.log(mapArray); // Task 7

console.log(evenArray); // Task 8

console.log(reduceArray); // Task 9

// Task 10
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("");

// Task 11
array.forEach((num) => {
  console.log(num);
});

console.log("");

// Task 12
for (let row of matrix) {
  let rowJoin = row.join(" ");
  console.log(rowJoin);
}

console.log("");

console.log(matrix[1][1]); // Task 13

function double(num) {
  return num * 2;
}

function even(num) {
  return num % 2 === 0;
}

function sum(pre, next) {
  return pre + next;
}
