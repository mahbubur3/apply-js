function checkEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
var myNumber = checkEven(10);
console.log(myNumber);

var hisNumber = checkEven(15);
console.log(hisNumber);


function checkOdd(num) {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}
var myNumber = checkOdd(13);
console.log(myNumber);

var herNumber = checkOdd(10);
console.log(herNumber);