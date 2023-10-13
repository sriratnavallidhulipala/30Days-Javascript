let i,j,n=7
let store=""

for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if((i==j)||(n==i+j+1)){
            store=store+"*"
        }
        else{
            store=store+"  "
        }
        
    }
    store=store+"\n"
}
console.log(store)