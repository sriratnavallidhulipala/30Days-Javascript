// *
// **
// * *
// *  *
// *   *
// ******
// 012345
let store=""
for(i=0;i<=5;i++){
    for(j=0;j<i;j++){
        if( i==5){
            store=store+"*"
        }
        else if(j==0 || j==i-1){
            store=store+"*"
        }
        else {
        store=store+" "
        }
    }
    store=store+"\n"
}
console.log(store)