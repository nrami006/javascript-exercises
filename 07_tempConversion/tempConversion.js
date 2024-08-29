const convertToCelsius = function (fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  var rounded = Math.round(celsiusTemp * 10) / 10
  return rounded;
};

const convertToFahrenheit = function (celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp * (9 / 5) + 32);
  let rounded = Math.round(fahrenheitTemp * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
