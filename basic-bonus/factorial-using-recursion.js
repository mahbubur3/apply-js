// var fact = 1;
// for (var i = 1; i <= 4; i++) {
//     fact = fact * i;
// }
// console.log(fact);

function fact(n) {
    if (n == 1) {
        return 1;
    }
    return fact(n - 1) * n;
}
let result = fact(5);
console.log(result);