// 0*     n-4  --->col
// 1**    n-3
// 2***   n-2
// 3****  n-1
// 4***** n
//  01234 ------>row

let store="";
for(i=0;i<=4;i++){
    for(j=0;j<i+1;j++){
        store=store+"*"
    }
    store=store+"\n"
}
console.log(store)
