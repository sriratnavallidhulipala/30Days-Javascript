// let store = "";
// let n = 3;
// for (let i = 0; i < n; i++) {
//   for (let s = 0; s < n - i - 1; s++) {
//     store = store + " ";
//   }
//   for (let j = 0; j < i + 1; j++) {
//     store = store + "*";
//   }
//   store = store + "\n";
// }
// console.log(store);


let store = "";
let n = 3;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j<n-i-1){
        store=store+" "
    }
    else{
        store = store + "*";
    }
   
  }
  store = store + "\n";
}
console.log(store);