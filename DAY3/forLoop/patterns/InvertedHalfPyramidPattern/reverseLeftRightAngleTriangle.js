// let N = 3;
// let store = "";

// for (i = 0; i < N; i++) {
//   for (s = 0; s < i; s++) {
//     store = store + "";
//   }
//   for (j = 0; j < N - i; j++) {
//     store = store + "*";
//   }

//   store = store + "\n";
// }
// console.log(store)

let N = 3;
let store = "";
let i, j;

for (i = 0; i < N; i++) {
//   for (s = 0; s < i; s++) {
//     store = store + "";
//   }
  for ( j = 0; j < N; j++) {//calculated one from j+s  formula
  
if(j<i){//space formula
    store = store + " "//provide the space 
}
else{
    store = store + "*"
}

  }
  store = store + "\n";
}
console.log(store)
