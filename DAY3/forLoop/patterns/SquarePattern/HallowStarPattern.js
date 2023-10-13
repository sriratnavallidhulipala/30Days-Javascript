//  01234->row->i
// 0*****->col->j
// 1*   *
// 2*   *
// 3*   *
// 4*****
let store=""
let n=4
for(i=0;i<=n;i++){

    for(j=0;j<=n;j++){
        if(i==0 || i==n){
            store=store+"*";
        }
        
        else if(j==0 || j==n){
            store=store+"*";  
        }
        
        else{
            store=store+" ";
        }
        
    }
    store=store+"\n"
    
}
console.log(store)