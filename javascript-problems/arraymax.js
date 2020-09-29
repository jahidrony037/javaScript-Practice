var marks= [45,81,63,56,35,23];
var max = marks[0];
for (var i = 0; i<marks.length; i++){
    var elements = marks[i];
    if(elements>max){
        max= elements;
    }
}
console.log("highest value is :" ,max);