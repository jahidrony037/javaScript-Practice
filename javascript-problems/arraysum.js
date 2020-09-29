
function getArraysum(numbers){

    var sum = 0;
    for (var i = 0; i< numbers.length; i++){
        var elements = numbers[i];
        sum = sum + elements;  
    }
    return sum;

}

var numbers = [45,65,78,12,54,65];

var result = getArraysum(numbers);
console.log(result);

