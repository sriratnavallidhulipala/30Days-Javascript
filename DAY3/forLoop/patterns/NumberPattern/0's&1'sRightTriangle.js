// 1
// 01
// 101
// 0101
// 10101
let i,j,n=5;
let store=""
for(i=1;i<=n;i++){
    //store=store+" "
    for(j=1;j<=i;j++){
        if(j % 2 === 0){
            store=store+"1"
        }
        else{
            store=store+"0"
        }
       
    }
    store=store+"\n"

}
console.log(store)