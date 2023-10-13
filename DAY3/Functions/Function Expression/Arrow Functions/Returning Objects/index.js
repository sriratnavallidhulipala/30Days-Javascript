//Returning Objects:

//If you want to return an object literal, you need to wrap
//the object in parentheses to avoid ambiguity with the function body:
const createPerson = (name, age) => ({ name, age} );
console.log(createPerson("Alice", 30)); // Outputs: { name: 'Alice', age: 30 }