let n=4,j,i,L;
let store="";


for(i=-n;i<=n;i++){
 
    
    if(i<0){
        L=-i;

    }
    else{
        L=i
    }
    for(j=0;j<(n-L)+1;j++){
        store=store+" *"
    }
    store=store+"\n"
}
console.log(store)