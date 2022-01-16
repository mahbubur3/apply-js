let numbers = [4, 7, 2, 9, 5, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    sum = sum + number;
}
console.log(sum);


// using function....
function sumElements(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
let elements = [5, 3, 9, 2, 4, 10];
let result = sumElements(elements);
console.log(result);


function sumOfElements(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        sum = sum + item;
    }
    return sum;
} 
let items = [50, 20, 60, 40, 80];
let result = sumOfElements(items);
console.log(result);
















