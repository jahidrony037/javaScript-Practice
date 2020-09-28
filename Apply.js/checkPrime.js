function isPrime (n){
    for (var i = 2; i<n; i++){
        if(n % i == 0){
            return "This number is not Prime";
        }
        return "Your Number is Prime Number";

    }

}
var result = isPrime(198);
console.log(result);