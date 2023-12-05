//WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
let distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// Conversion factors
const metersInKilometer = 1000;
const feetInMeter = 3.28084;
const inchesInMeter = 39.3701;
const centimetersInMeter = 100;

// Convert distance to different units
let distanceInMeters = distanceInKilometers * metersInKilometer;
let distanceInFeet = distanceInMeters * feetInMeter;
let distanceInInches = distanceInMeters * inchesInMeter;
let distanceInCentimeters = distanceInMeters * centimetersInMeter;

// Print the results
console.log("Distance in meters: " + distanceInMeters + " m");
console.log("Distance in feet: " + distanceInFeet + " ft");
console.log("Distance in inches: " + distanceInInches + " in");
console.log("Distance in centimeters: " + distanceInCentimeters + " cm");
