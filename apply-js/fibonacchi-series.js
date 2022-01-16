const fibo = [0, 1];
for (let i = 2; i <= 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo)

// using function 
function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let result = fibonacciSeries(10);
console.log(result);