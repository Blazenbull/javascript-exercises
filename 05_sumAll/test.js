let x = 123
let y = 1
let w=[]

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
sumOfAllIntegers()

console.log(sumOfAllIntegers())
