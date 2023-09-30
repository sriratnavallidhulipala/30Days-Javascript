//concat
let numbers =[10,20,30];
let b=[60,70]
let c =numbers.concat(b);
console.log(c)
//push
numbers.push(80);
console.log(numbers);
//inserting
numbers.splice(0,0,100);
console.log(numbers);
//remove 
numbers.splice(0,1);
console.log(numbers);
numbers.splice(numbers.indexOf(10),1);
console.log(numbers)
//clear
numbers.length=0;
console.log(numbers)