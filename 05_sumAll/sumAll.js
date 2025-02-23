const sumAll = function(x, y) {
    let w=[];
    if (x<0 || y<0) {
        return "ERROR"
    }
    if (!Number.isInteger(x)||!Number.isInteger(y)){
        return "ERROR"
    }
    function sortBigger(){
        if (x>y){
            b=x;
            x=y;
            y=b;
        }
        else {
            x=x;
            y=y;
        }
    }
    sortBigger()
    
    function identifyIntegersInRange(){
        for(i=x; i<=y;i++){
            w.push(i)
        }
    
    }
    identifyIntegersInRange()
    
    function sumOfAllIntegers(){
        return w.reduce(sums)
        function sums(acc,ele){
            return acc+ele
        }
    }
    return sumOfAllIntegers()

    
};

// Do not edit below this line
module.exports = sumAll;
