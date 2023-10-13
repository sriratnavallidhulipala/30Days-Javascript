// Create the parent (animal) object
const animal = {
    species: "Unknown",
    sound: "Unknown"
  };
  
  // Create the child (cat) object that inherits properties
  const cat = Object.create(animal);
  cat.name = "Fluffy";
  cat.sound = "Meow";
  
  for (let key in cat) {
    if (cat.hasOwnProperty(key)) {
      console.log("Own Property: " + key + ": " + cat[key]);
    } else {
      console.log("Inherited Property: " + key + ": " + cat[key]);
    }
  }