const add = function(first, second) {
  return first + second; 
	
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  if(array.length<1){
    return 0;
  }else
  return array.reduce((acc,curr)=>(acc+curr))
	
};

const multiply = function(array) {
  if(array.length<1){
    return 0;
  }else
  return array.reduce((acc,curr)=>(acc*curr))
};

const power = function(base, exponent) {
return base ** exponent
	
};
//positive way will not work as the recursion as the for loop goes forever
//with fact endless multiplying itself to be bigger and bigger
const factorial = function(fact) {
 if(fact>0){
  for (var i = num - 1; i >= 1; i--){
    fact*=i
}
  return num
}
else{
  return 1
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
