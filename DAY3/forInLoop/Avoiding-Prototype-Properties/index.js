// Create an object with some properties
const person = {
  name: "John",
  age: 30
};

// Add properties to its prototype
Object.prototype.country = "USA";
Object.prototype.gender = "Male";

// Use a for...in loop to iterate over the object's properties (excluding prototype)
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}
