//Input the distance in Kilometer and Convert into Meter and Centimeter.
let cm, meter, kilometer;
// consider the distance in kilometers
kilometer = 5; // give your  desired distance in kilometers

// Conversion
const metersInKilometer = 1000;
const centimetersInMeter = 100;

// now we are calculating meter and cm from Conversion
meter = kilometer * metersInKilometer;
cm = meter * centimetersInMeter;

console.log("Length in meter = " + meter);
console.log("Length in centimeter = " + cm);




