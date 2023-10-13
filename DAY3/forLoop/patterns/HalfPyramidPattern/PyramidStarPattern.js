//     *       n-4
//    ***      n-3
//   *****     n-2
//  *******    n-1
// *********   n
// 012345678

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n=3;
// let i,j
// let store=""
// for(i=0;i<n;i++){
//   for(s=0;s<n-i-1;s++){//space
//     store=store+" "
//   }
//     for(j=0;j<2*i+1;j++){
//       store=store+"*"
//     }
//     store=store+"\n"
// }
// console.log(store)
let n = 5;
let i, j;
let store = "";
for (i = 0; i < n; i++) {
  for (j = 0; j < i + n; j++) { //calculated final an
    if (j < n - i - 1) {//space formula
      store = store + " ";
    } else {
      store = store + "*";
    }
    
  }
  store = store + "\n";// "\n is for new line"
}
console.log(store);
