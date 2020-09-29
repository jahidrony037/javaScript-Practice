var num = 2.500001;
var result =Math.floor(num);
var result1 = Math.ceil(num);
var result2 = Math.round(num);


// console.log(dice);

// console.log(result);
// console.log(result1);
// console.log(result2);

for (var i = 0; i<10; i++){
    var dice =Math.random()*6;
    var dice1 = Math.round(dice);
    console.log(dice1);

}