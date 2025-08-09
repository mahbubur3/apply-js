// const numbers = [9, 2, 4, 7];
// for (const num of numbers ) {
//     console.log(num);
// }


// const brands = ["Apple", "Lenovo", "Asus", "Dell"];
// for (const brand of brands) {
//     console.log(brand);
// }


// WHILE LOOP
// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }


// let num = 1, sum = 0;
// while (num <= 10) {
//     sum += num;
//     num++;
// }

// console.log(sum);


// const x = "";
// if (!x.length) {
//     console.log("hey");
// } else {
//     console.log("hi");
// }


// const str = "hello";
// str[0] = "h";
// console.log(str);



// const items = ['watch', 'mouse', 'pen'];
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }


// const items = ['watch', 'mouse', 'pen'];
// let i = 0;
// while (i < items.length) {
//     console.log(items[i]);
//     i++;
// }



// Reverse array #01 way
// const numbers = [1, 2, 3, 4];
// const reversed = [];

// for (let i = 0; i < numbers.length; i++) {
//     reversed.unshift(numbers[i]);
// }

// console.log(reversed);


// Reverse array #02 way
// const numbers = [1, 2, 3, 4];
// const reversed = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
// }

// console.log(reversed);



// ARRAY OF OBJECT
// const employees = [
//     {name: 'price', id: 109, salary: 15000},
//     {name: 'gaz', id: 910, salary: 25000},
//     {name: 'soap', id: 276, salary: 19000},
// ]

// for (const employee of employees) {
//     console.log(employee);
// }

// for (const employee of employees) {
//     console.log(employee.name);
// }


// FUNCTION
// function multi(num1, num2) {
//     const result = num1 * num2;
    
//     return result;
// }

// console.log(multi(10, 20));




// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(20));




// Sum of an array
// function sumOperation(numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

// const numbers = [10, 20, 30, 40];
// const total = sumOperation(numbers);
// console.log(total);



// Show even numbers in an array
// function evenNumbers(nums) {
//     arr = [];
//     for (const i of nums) {
//         if (i % 2 === 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }

// const nums = [21, 8, 6, 3, 9, 10];
// console.log(evenNumbers(nums));




// Sum of all even numbers in an array
function sumEvenNumbers(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 2 ==0) {
            sum += num;
        }
    }

    return sum;
}

const nums = [21, 8, 6, 3, 9, 10];
console.log(sumEvenNumbers(nums));
