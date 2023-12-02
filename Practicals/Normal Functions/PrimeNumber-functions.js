//const num = parseInt(prompt('Enter the first number '));
function isPrime(num) {
    if (num === 2) return true;
    if (num <= 1) return false;
    let num2 = Math.sqrt(num);//num2 is the square root of num
 for (let i= 2; i <= num2; i++) {
    if (num % 2 === 0) {
     return false;
      }
    }
    return true;
   }
  console.log(isPrime(521))//gives us a False answer
  console.log(isPrime(2)) // gives us a True answer
  console.log(isPrime(577))//gives us a True answer
