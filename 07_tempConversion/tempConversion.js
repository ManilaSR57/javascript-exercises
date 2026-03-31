const convertToCelsius = function(fahrenTemp) {
  return parseFloat(((fahrenTemp - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celciusTemp) {
  return parseFloat((celciusTemp * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
