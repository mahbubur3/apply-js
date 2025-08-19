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
// function sumEvenNumbers(nums) {
//     let sum = 0;
//     for (const num of nums) {
//         if (num % 2 ==0) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// const nums = [21, 8, 6, 3, 9, 10];
// console.log(sumEvenNumbers(nums));



// Check leaf year
// function isLeafYear(year) {
//     if ((year % 100 !== 0 && year % 4 === 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return true;
//     }
//     return false;
// }

// console.log(isLeafYear(2028));




// Calculate averate the odd numbers in an array
/*
function averageOfOddNumbers(numbers) {
    const oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
    }

    let sum = 0;
    for (const number of oddNumbers) {
        sum += number;
    }

    const len = oddNumbers.length;
    const avg = sum / len;

    return avg;
}

const numbers = [9, 2, 7, 4, 8, 1];
const result = averageOfOddNumbers(numbers)
console.log(result.toFixed(2));
*/



// Remove duplicated items from an array
// function noDuplicated(arr) {
//     const newArr = [];
//     for (const i of arr) {
//         if (newArr.includes(i) === false) {
//             newArr.push(i);
//         }
//     }

//     return newArr;
// }

// const arr = ['Japan', 'US', 'China', 'US', 'Russia'];
// console.log(noDuplicated(arr));




// Swap
// let x = 5, y = 9;
// [x, y] = [y, x];
// console.log(x, y);


// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }



// PRACTICE TASKS
// function celsiousToFahrenheit(c) {
//     return (c * 9/5) + 32;
// } 

// const c = 27;
// console.log(celsiousToFahrenheit(c));



// function repeatedCount(numbers, find) {
//     let count = 0;

//     for (const number of numbers) {
//         if (number == find) {
//             count++;
//         } 
//     }

//     return count;
// }

// const numbers = [5, 6, 11, 12, 98, 5];
// console.log(repeatedCount(numbers, 5));



// Find max number from an array
// function getMax(numbers) {
//     let max = numbers[0];

//     for (const num of numbers) {
//         if (num > max) {
//             max = num;
//         }
//     }

//     return max;
// }

// const numbers = [10, 90, 20, 50, 80];
// console.log(getMax(numbers));
 


// Find cheapest phoe
// const phones = [
//     { name: 'apple', price: 1099},
//     { name: 'samsung', price: 1199},
//     { name: 'google', price: 999},
//     { name: 'xiaomi', price: 699},
// ]

// function getCheapestPhone(phones) {
//     let min = phones[0];

//     for (const phone of phones) {
//         if (phone.price < min.price) {
//             min = phone;
//         }
//     }

//     return min;
// }

// console.log(getCheapestPhone(phones));




// Shopping cart total cost
// const products = [
//     { name: "Phone", price: 1099 },
//     { name: "watch", price: 599 },
//     { name: "keyboard", price: 299 },
// ]

// function getTotalPrice(products) {
//     let total = 0;
    
//     for (const product of products) {
//         total += product.price;
//     } 

//     return total;
// }

// console.log(getTotalPrice(products));



const products = [
    { name: "Phone", price: 1099, quantity: 2 },
    { name: "watch", price: 599, quantity: 1 },
    { name: "keyboard", price: 299, quantity: 3 },
]

function getTotalPrice(products) {
    let total = 0;
    
    for (const product of products) {
        total += product.price * product.quantity;
    }

    return total;
}

console.log(getTotalPrice(products));