const repeatString = function(string, num) {
if (num<0){

    return "ERROR"
}
else{
    let store = "";
    for (let i = 0; i < num; i++){
        store+=string;
        
    }
return store;
}

};
// Do not edit below this line
module.exports = repeatString;
