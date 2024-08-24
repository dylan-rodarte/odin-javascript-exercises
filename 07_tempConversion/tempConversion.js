const convertToCelsius = function(tempF) {
  let convertedC = (5/9) * (tempF - 32);
  convertedC = Math.round(convertedC * 10) / 10;
  return convertedC;
};

const convertToFahrenheit = function(tempC) {
  let convertedF = (tempC * (9/5)) + 32;
  convertedF = Math.round(convertedF * 10) / 10;
  return convertedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
