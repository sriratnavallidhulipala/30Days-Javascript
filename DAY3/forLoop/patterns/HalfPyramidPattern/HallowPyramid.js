let i,j,n=6,s;
let store=""

for(i=0;i<n;i++){
    for(s=0;s<n-i-1;s++){
        store=store+"  "
    }
    for(j=0;j<2*i+1;j++){
        //2*i+1-1
        if(j==0|| j==2*i ||i==n-1){
        store=store+"* "
    }
    else{
        store=store+"  "
    }
}
    store=store+"\n"
}
console.log(store)