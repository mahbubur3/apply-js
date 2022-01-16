// 4! = 4 x 3 x 2 x 1 = 24
// 5! = 5 x 4 x 3 x 2 x 1 = 120

var fact = 1;
for (var i = 1; i <= 4; i++) {
    fact = fact * i;
}
console.log(fact);


var fact = 1;
for (var i = 1; i <= 7; i++) {
    fact = fact * i;
}
console.log(fact);


function facto(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var myNum = facto(7);
console.log(myNum);
var hisNum = facto(4);
console.log(hisNum);


function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var myFactNumber = getFactorial(5);
console.log(myFactNumber);
var hisFactNumber = getFactorial(3);
console.log(hisFactNumber)


// ** using while loop
function getFactorial(number) {
    var fact = 1;
    var i = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var myNumber = getFactorial(5);
console.log(myNumber);


// reverse 
function getFactorial(number) {
    var fact = 1;
    var i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
var myNum = getFactorial(6);
console.log(myNum);


// using for loop 
function getFactorial(num) {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
var myNum = getFactorial(6);
console.log(myNum);

// *** using recursion...
function fact(num) {
    if (num == 1) {
        return 1;
    }
    return num * fact(num - 1);
}
var myFactorial = fact(5);
console.log(myFactorial);