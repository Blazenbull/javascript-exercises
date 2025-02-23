const convertToCelsius = function(works) {
  return Math.round(((works-32)*(5/9))*10)/10
};

const convertToFahrenheit = function(works) {
  return Math.round(((works*(9/5)+32)*10))/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
