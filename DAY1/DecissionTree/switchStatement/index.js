let num1,num2;
num1=10;
num2=20;
let choice = parseInt(prompt("Press \n 1 for sum\n2 for sub \n 3 for mul \n4 for div\n"));
//parseFloat(prompt("Press \n 1 for sum\n2 for sub \n 3 for mul \n4 for div\n"));
    switch(choice)
    {
        case 1:
            console.log("Sum=",num1+num2)
        break;
        case 2:
            console.log("Sub=",num1-num2)
        break;
        case 3:
            console.log("mul=",num1*num2)
        break;
        case 4:
            console.log("div=",num1/num2)
        default:
            console.log("enter a valid choice")
    }