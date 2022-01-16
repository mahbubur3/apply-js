// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 24 + 37

function fibo(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(7)); // mane hocche 7 index a ke achee...