//Question-10:Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
// Input principal amount, rate of interest, and number of years
let principalAmount = parseFloat(prompt("Enter the principal amount:"));
let rateOfInterest = parseFloat(prompt("Enter the rate of interest (in percentage):"));
let numberOfYears = parseInt(prompt("Enter the number of years:"));

// Calculate simple interest
let simpleInterest = (principalAmount * rateOfInterest * numberOfYears) / 100;

// Print the result
console.log("Principal Amount: $" + principalAmount.toFixed(2));
console.log("Rate of Interest: " + rateOfInterest.toFixed(2) + "%");
console.log("Number of Years: " + numberOfYears);
console.log("Simple Interest: $" + simpleInterest.toFixed(2));