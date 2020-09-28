function doFactorial(num){
    let factorial = 1;
   while(num>=1){
       factorial = factorial *num;
       num--;
   }
   return factorial;
}

const result = doFactorial(1);
console.log(result);