let data = new Set([10,100,200,10]);
console.log(data)
if(data.has(10)){
console.log("yes");
}
else{
    console.log("No")
}

//modifying set items
let data1 = new Set([10,100,200,10]);
//add items to set
data1.add(300);
data.add(1000).add(2000).add(3000)
console.log(data1);

//remove an item from set 
let data2 = new Set([10,300,200,10]);
//delete items to set
data2.delete(300);
console.log(data2);
//delete all the items from the set 
//empty the set 
let data3 = new Set([10,300,200,10]);
//empty items to set
data3.clear();
console.log(data3);
//delete entire set
let data4= new Set([10,300,200,10]);
//empty items to set
data4 =null;
console.log(data4);
//how to find the length of the set 
let info = new Set([10,100,200,300,19]);
let copy = new Set(info)
console.log(copy);
