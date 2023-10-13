// 01234
// *****    n
// ****     n-1
// ***      n-2
// **       n-3
// *        n-4

// let store="";
// for(i=0;i<=4;i++){
//     for(j=0;j<=4-i;j++){
//         store=store+"*";
//     }
//     store=store+"\n";
// }
// console.log(store)
let store=""
let n=3
for(i=0;i<4;i++){

    for(j=0;j<n-i;j++){
        store=store+"*"
    }
    store=store+"\n";
}
console.log(store)