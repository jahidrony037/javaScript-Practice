var marks = [45,45,32,23,67,78,12,6,5,63];

var smallest = marks[0];
for (var i = 0; i<marks.length; i++){
    var elements = marks[i];
    if(elements<smallest){
        smallest= elements;
    }
}
console.log('the smallest number is : ',smallest);


var friendsArray = ['rahim', 'rony','ron','av','mollik','lemon']
var smallName = friendsArray[0];
 function tinyFriend(friendsArray){
    for(var i = 0; i<friendsArray.length; i++){
        var friendsName = friendsArray[i];
       
        if(friendsName.length < smallName.length){
            smallName = friendsName;
        }  
    }
     return smallName;
}
 var tinyFriendName = tinyFriend(friendsArray);
 console.log(smallName);
