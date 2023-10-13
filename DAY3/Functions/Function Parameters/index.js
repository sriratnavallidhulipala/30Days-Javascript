const person1={
    name:'rohan',
    age: 20,
 };
 const person2={
    name:'rosey',
    age: 20,
 };
 //parameters
 function printName(name){//declaration
    console.log(name)

 }
printName(person1.name)//call
printName(person2.name)//call
 //parameters
 function printPerson(name,age){//declaration
    console.log(person1.name)
    console.log(person2.age)

 }
 printPerson(person1.name,person2.name)//call
 printPerson(person2.name)//call
 printPerson('johan',23)