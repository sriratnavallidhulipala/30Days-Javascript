function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3)); // Outputs: 6
  console.log(sum(4, 5, 6, 7, 8)); // Outputs: 30