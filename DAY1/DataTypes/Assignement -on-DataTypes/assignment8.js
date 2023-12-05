//WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
// Input the temperature in Fahrenheit
let temperatureInFahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

// Conversion formula from Fahrenheit to Celsius
let temperatureInCelsius = (temperatureInFahrenheit - 32) * 5/9;

// Print the result
console.log("Temperature in Celsius: " + temperatureInCelsius.toFixed(2) + " °C");