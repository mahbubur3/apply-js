// pricipal balance
// annual interest rate
// time in years
// formula = (p*r*t)/ 100

function simpleInterest(pricipal, rate, time) {
    var si = (pricipal * rate * time) / 100;
    return si;
}
var result = simpleInterest(155000, 5.6, 2);
console.log(result);
