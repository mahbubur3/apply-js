var num1 = 6;
var num2 = 9;
console.log(num1, num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

var num1 = 10;
var num2 = 50;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);