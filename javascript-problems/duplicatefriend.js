var names = ['rahim', 'rahim', 'karim', 'gabul', 'abul', 'babul', 'abul', 'sajeeb', 'fub', 'gump'];

var uniqueNames = [];

for (var i = 0; i<names.length; i++){
    var element = names[i];
    var index = uniqueNames.indexOf(element);
    console.log(index);
    if(index == -1 ){
        uniqueNames.push(element);
    }
}
console.log(uniqueNames);