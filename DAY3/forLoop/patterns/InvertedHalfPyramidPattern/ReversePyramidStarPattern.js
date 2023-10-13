// let N = 5;
// let string = "";
// for (i = 0; i < N; i++) {
//   for (j = 0; j < i; j++) {
//     string = string + "";
//   }

//   for (j = 0; j < 2 * N - (2 * i + 1); j++) {
//     string = string + "*";
//   }
//   for (j = 0; j < i; j++) {
//     string = string + "";
//   }
//   string = string + "\n";
// }
// console.log(string);

let N = 3;
let string = "";

// for(i=0;i<N;i++){
//   string=string+"";
//   for(s=0;s<i;s++){
//     string=string+" ";
//   }
//   for(j=0;j<2*N-(2*i+1);j++){
//     string=string+"*";
//   }
//   string=string+"\n";
// }
// console.log(string);

for (i = 0; i < N; i++) {
  string = string + "";

  for (j = 0; j < 2 * N -( i + 1); j++) {
    // calculated formula
    if (j < i) {
      //space formula
      string = string + " ";
    } else {
      string = string + "*";
    }
  }
  string = string + "\n";

}
console.log(string);
