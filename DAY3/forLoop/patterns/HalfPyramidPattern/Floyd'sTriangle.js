let n=5;
let i,j,k=1;
let store="";
for(i=0;i<n;i++){
    store=store+""
    for(j=0;j<i+1;j++){
        store=store+" " +k
        k=k+1
    }
    store=store+"\n"
    
}
console.log(store)