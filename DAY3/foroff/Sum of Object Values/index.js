const numbers = { a: 5, b: 10, c: 15, d: 20 };
let sum = 0;

for (const key in numbers) {
  sum += numbers[key];
}

console.log("The sum of values is: " + sum);