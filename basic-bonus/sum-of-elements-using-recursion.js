function sum(num) {
    if (num == 1) {
        return 1;
    }
    return sum(num - 1) + num;
}
let result = sum(5);
console.log(result);