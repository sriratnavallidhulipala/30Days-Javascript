let str ="HELLO";
console.log(str);
//if the char is present or not
if(str.includes("e"))
{
    console.log("Yes")

}
else{
    console.log("No")
}
let str1 ="JavaScript";
console.log("1st char",str1[0]);
console.log(str1[100])//undefined
str1[4]="z";
console.log(str1);//strings are immutable value cant be changed

