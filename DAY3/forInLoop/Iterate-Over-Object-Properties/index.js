const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  // Use a for...in loop to iterate over the properties
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }