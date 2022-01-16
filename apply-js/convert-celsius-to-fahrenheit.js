//---- formula (0°C × 9/5) + 32 = 32°F

function celsToFahren(celsius) {
    var convertFahrenheit = (celsius * 9/5) + 32;
    return convertFahrenheit;
}
var result = celsToFahren(29);
console.log(result);

// without function...
var celsius = 35;
var fahrenheit = (35 * 9 / 5) + 32;
console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);