// --- formula (32°F − 32) × 5/9 = 0°C

function fahrenToCels(fahrenheit) {
    var convertCelsius = (fahrenheit - 32) * 5 / 9;
    return convertCelsius;
}
var result = fahrenToCels(90);
result = result.toFixed(2); // doshomiker pore 2 ta number show korbe...
console.log(result);


// without function..
var fahrenheit = 85;
var convertCelsius = (fahrenheit - 32) * 5 / 9;
convertCelsius = convertCelsius.toFixed(2);
console.log(`${fahrenheit} Fahrenheit = ${convertCelsius} Celsius`); 