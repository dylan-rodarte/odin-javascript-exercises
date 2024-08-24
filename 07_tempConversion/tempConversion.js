const convertToCelsius = function(tempF) {
  let convertedC = (5/9) * (tempF - 32);
  convertedC = Math.round(convertedC * 10) / 10;
  return convertedC;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
