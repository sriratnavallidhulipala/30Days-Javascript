const carWithTypes = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isAutomatic: true,
    mileage: 5000,
    owner: "John Doe",
    start: function() {
      console.log("Car started.");
    }
  };
  
  for (let key in carWithTypes) {
    if (typeof carWithTypes[key] === "string") {
      console.log(key + ": " + carWithTypes[key]);
    }
  }