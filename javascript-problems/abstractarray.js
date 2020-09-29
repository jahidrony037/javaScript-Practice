
function abstructArray(friendsArray){

        var uniqueArray = [];

        for (var i =0; i<friendsArray.length; i++){
        var element = friendsArray[i];
        var index = uniqueArray.indexOf(element);

        if(index == -1 ){
            uniqueArray.push(element);
        }
        }
        return uniqueArray;
}

var friendsArray = ['rahim', 'karim', 'bulu', 'chulu', 'kulu', 'mulu', 'rahim', 'shanto','sajeeb','shakil','saimon','sajeeb','khalil','rony','dip','apple','dip'];
var id = [2,3,3,4,5,6,7,5,4,3,7,89,5];
var result = abstructArray(friendsArray);
var resultID = abstructArray(id);
console.log(result);
console.log(resultID);