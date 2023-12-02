//Question-9:Input the quantity and rate of a product then calculate the amount.
// A discount of 10 % after then calculate discount amount and amount after discount.

// Input the quantity and rate of a product
let quantity = parseInt(prompt("Enter the quantity of the product:"));
let rate = parseFloat(prompt("Enter the rate of the product:"));

// Calculate the amount
let amount = quantity * rate;

// Apply a 10% discount
const discountPercentage = 10;
let discountAmount = (amount * discountPercentage) / 100;
let amountAfterDiscount = amount - discountAmount;

// Print the results
console.log("Amount before discount: $" + amount.toFixed(2));
console.log("Discount amount (10%): $" + discountAmount.toFixed(2));
console.log("Amount after discount: $" + amountAfterDiscount.toFixed(2));