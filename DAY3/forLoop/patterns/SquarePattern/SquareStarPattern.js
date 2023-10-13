//    01234  ->colum ->j->inner loop
//    0***** ->rows  ->i->outer loop
//    1*****
//    2*****
//    3*****
//    4*****
let store=""
for(i=0;i<=4;i++){
    store=""
    for(j=0;j<=4;j++){
        store=store+"*"

    }
    console.log(store)
}