// let numbers = [5, 3, 6, 2];
// let output = [];
// for (let number of numbers) {
//     let result = number * 2;
//     output.push(result);
// }
// console.log(output);

// let numbers = [5, 3, 6, 2];
// let output = [];
// let doubleIt = num => num * 2;
// for (let num of numbers) {
//     let result = doubleIt(num);
//     output.push(result);
// }
// console.log(output);

// * using normal function
// let numbers = [5, 3, 6, 2];
// let doubleIt = numbers.map(function (number) {
//     return number * 2;
// })

// console.log(doubleIt);

// const numbers = [5, 3, 6, 2];
// const result = numbers.map(x => x * 2);
// console.log(result);

// let numbers = [5, 3, 6, 2];
// let doubleIt = num => num * 2;
// let output = numbers.map(doubleIt);
// console.log(output);

// let numbers = [6, 8, 4, 2];
// let sum = numbers.map(number => number + 5);
// console.log(sum);



const numbers = [5, 9, 2, 3]
const output = [];

for (const number of numbers) {
    const result = number * 2;
    output.push(result)
}

console.log(output);