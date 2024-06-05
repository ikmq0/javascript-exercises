const convertToCelsius = function(temp) {
  let tempInF = (temp - 32) * 5/9;
  tempInF = parseFloat(tempInF.toFixed(1));
  return tempInF;
};

const convertToFahrenheit = function(temp) {
  let tempInC = (temp * 9/5) + 32;
  tempInC = parseFloat(tempInC.toFixed(1));
  return tempInC;
};
console.log(convertToFahrenheit(0))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
