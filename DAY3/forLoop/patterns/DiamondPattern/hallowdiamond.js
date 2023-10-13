//need to do done
let i,j,n=4;
let store="";
for(i=-n;i<=n;i++){
    for(j=0;j<=2*n+1;j++){
        if(n-i && n+1+i){
        store=store+" "
    }
    else{
        store=store+"*"
    }
}
store=store+"\n"
}
console.log(store)