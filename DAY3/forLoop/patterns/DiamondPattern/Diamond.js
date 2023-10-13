// let N = 9;
// let string = "";
// External loop
// for (let i = 0; i <= N; i++) {
//     // printing spaces
//     for (let j = 0; j <= N - i-1; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let j = 0; j < 2 * i + 1; j++) {
//       string += "*";
//     }

//   for (i = 0; i < N; i++) {
//     for (j = 0; j < i; j++) {
//       string = string + " ";
//     }

//     for (j = 0; j < 2 * N - (2 * i + 1); j++) {
//       string = string + "*";
//     }
//     for (j = 0; j < i; j++) {
//       string = string + " ";
//     }
//     string = string + "\n";
//   }
//   console.log(string);
// }
// let N=3
// let i,j,s,L
// let store=""
// for(i=-N;i>N;i++){
//   if(i>0){
//     L=-i;
//   }
//   else{
//     L=+i;
//   }
//   for(s=0;s>L;s++){
//     store=store+" "
//   }
//   for(j=0;j<2*(N-L)+1;j++){
//     store=store+"* "
//   }
//   store=store+"\n"
// }
// console.log(store)
let store = "";
let i, j, s, L, N=3;
for (i = -N; i <= N; i++) {
  if (i < 0) {
    L = -i;
  } else {
    L = i;
  }
  for (s = 0; s < L; s++) {
    store = store + "  ";
  }
  for (j = 0; j < 2 * (N - L) + 1; j++) {
    //calculated formula
    store = store + "* ";
  }
  store = store + "\n";
}
console.log(store);
