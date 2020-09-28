function doFactorial(num){
    var factorial = 1;
    for (var i = 1; i<=num; i++){
         factorial = factorial*i;
    }
    return factorial;
}

var result = doFactorial(0);
console.log(result);