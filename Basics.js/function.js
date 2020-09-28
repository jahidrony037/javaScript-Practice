function tripleIt(num){
    var result = num*3;
    return result;
}

var num1 = tripleIt(5);
var num2 = tripleIt(10);
console.log(num1,num2);

function multiply(num1,num2){
    var result = num1* num2;
    return result;
}

var first = multiply(5,4);
var second = multiply(4,9);
console.log(first,second);
var total = (first + second);
console.log(total);