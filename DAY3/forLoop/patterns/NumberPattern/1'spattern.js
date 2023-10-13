let n=6;
let i ,j,k=1
let store=""


for(i=0;i<=n;i++){
    for(j=-n;j<=n;j++){
        if(-i<j && j<i){
        store=store+""+k+1
        }
        else{
            store=store+""
        }
    }
    store=store+"\n"
}

console.log(store)
