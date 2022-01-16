function inchesToFeet(inches) {
    var result = inches / 12; //12inch = 1feet
    return result;
}
var myConvert = inchesToFeet(120);
console.log(myConvert);
var fatherConvert = inchesToFeet(80);
console.log(fatherConvert);