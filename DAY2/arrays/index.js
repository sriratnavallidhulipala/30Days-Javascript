let colors = ["red","blue","black"]
console.log(colors)
let data=["javascript",3.64,2018]
console.log(data)
if(colors.includes("red")){
    console.log("yes")
}
else{
    console.log("no")
}
let numbers=[10,20,30,40,50];
console.log(numbers[0]);
//reverse indexing
console.log("lastelement",numbers.at(-1));
console.log("2ndlast",numbers.at(-2));
//replace the array  numbers
console.log(numbers);
numbers[3]=100;
console.log(numbers)//modified array
//Slicing Arrays
numbers.slice(0,3)
console.log(-4,-1)
//slicing  by default value
console.log(numbers.slice(undefined,3));
console.log(numbers.slice(3));
//copy of the array
copy =numbers.slice
let numbers_copy=numbers.slice();
console.log("copy array",numbers_copy);
