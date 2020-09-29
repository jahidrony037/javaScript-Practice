function reverseString(str){
        var reverse = " ";
    for (var i = 0; i<str.length; i++){
        var char = str[i];
        var reverse = char + reverse;

    }
    return reverse;

}

var statement= "Hello Alien bhai Brother.";
var ambu = 'ECNALUBMA';
var song = ".isabolav yamot ima algnab ranos ramA"

var result = reverseString(song);
console.log(result);
