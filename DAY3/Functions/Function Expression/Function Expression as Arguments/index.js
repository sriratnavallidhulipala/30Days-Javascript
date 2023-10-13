function doOperation(a, b, operation) {
    return operation(a, b);//value or function for result return
  }
  
  const add = function(a, b) {
    return a + b;
  };
  
  const multiply = function(a, b) {
    return a * b;
  };
  
  const result1 = doOperation(3, 4, add);
  console.log(result1); // Outputs: 7
  
  const result2 = doOperation(3, 4, multiply);
  console.log(result2); // Outputs: 12