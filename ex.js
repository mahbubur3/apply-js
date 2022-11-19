// var countryName = ["Japan", "China", "USA", "Sweden", "Canada", "India"];
// console.log(countryName[3]);


// if (countryName[2] == "Japan") {
//     console.log("I want to go Japan");
// }
// else if (countryName[4] == "UK") {
//     console.log("I want to go Canada")
// }
// else {
//     console.log("kunu deshei jabo na!!!")
// }


// var phonePrice = 4500;
// var myBudget = 4500;
// if (phonePrice <= myBudget) {
//     console.log("I will buy it...")
// }

// var num = prompt("Enter a number: ")

// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// var myFact = factorial(7);
// console.log(myFact);


// function getFactorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// myFact = getFactorial(8);
// console.log(myFact)

/*
function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " it is leap year");
    } else {
        console.log(year + " it is not leap year")
    }
}
var enterYear = checkLeapYear(2020);
console.log(enterYear);
 */

/*
let products = ["shirt, keyboard, charger, cable, light, shoe"];
for (let i = 0; i < products.length; i++) {
    let item = products[i];
    console.log(item);
}
*/

/* let products = ["shirt, keyboard, charger, cable, light, shoe"];
for (let item of products) {
    console.log(item);
} */


// let ages = [56, 43, 23, 54, 78, 64, 89];
// for (let showAges of ages) {
//     console.log(showAges);
// }

// let allRoll = [56, 43, 89, 56, 78, 43, 89, 99, 23, 56];
// function removeDup(allRoll) {
//     const uni = [];
//     for (const num of allRoll) {
//         if (uni.indexOf(num) == -1) {
//             uni.push(num)
//         }
//     }
//     return uni;
// }
// let result = removeDup(allRoll);
// console.log(result);

// let greating = "How are you";
// console.log(greating.length);
// console.log(greating[5]);
// console.log(greating[8]);

// let numbers = [56, 32, 78, 54, 67, 90, 43];
// for (showAllNumbers of numbers) {
//     console.log(showAllNumbers);
// }

// let greating = "How are you";
// for (let char of greating) {
//     console.log(char);
// }


// const products = [
//     { name: "phone", price: 5000 },
//     { name: "desktop", price: 65000 },
// ]



/* function animalCount(miles) {
    if (miles <= 10) {
        let count = miles * 10;
        return count;
    }
}
let animals = animalCount(8);
console.log(animals); */



// function friendLargeName(friendsName) {
//     let largeName = 0;
//     for (let i = 0; i < friendsName.length; i++) {
//         let element = friendsName[i];
//         if (element.length == 5) {
//             largeName = element;
//             break;
//         }
//     }
//     return largeName;
// }
// let friendsName = ["john", "tess", "ravi", "smith", "jack", "carolina"];
// let result = friendLargeName(friendsName);
// console.log(result);


// let a = {};
// console.log(a.name);

// let a = (name) => {
//     return (age) => console.log(name, age);
// };
// a('Rahim', 25);
// a('Rahim')(25);
// a => (rahim)(25);
// a(rahim)(25);

// document.getElementById('submit-btn').addEventListener('click', function () {
//     console.log('clicked');
// })

// const submit = document.getElementById('submit-btn');
// submit.addEventListener('click', function () {
//     console.log('clicked');
// })


// const submit = document.querySelector('submit-btn');
// submit.addEventListener('click', function () {
//     console.log('clicked');
// })


// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let person = new People('John', 30);
// console.log(person);


// class Student {
//     constructor() {
//         this.name = 'Will Smith';
//     }
// }

// let info = new Student();
// console.log(info);

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// let myCar = new Car('Honda Civic', 2022);
// let myFriendCar = new Car('Toyota CHR', 2020);
// console.log(myCar);
// console.log(myFriendCar);


// class Rectangle {
//     constructor(height, width) {
//         this.h = height;
//         this.w = width;
//     }

//     calculateArea() {
//         return this.h * this.w;
//     }
// }

// let result = new Rectangle(30, 20);
// console.log(result.calculateArea());


// class Boss {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Hello! ${this.name}`;
//     }
// }

// let toGreet = new Boss('Smith');
// console.log(toGreet.greet());


// * array mapping
// let numbers = [6, 8, 4, 2];
// let sum = numbers.map(number => number + 5);
// console.log(sum);


// ----------
// let number = 1
// while (number < 10) {
//     console.log(number);
//     number += 1
// }


// const sum = (num1, num2) => num1 + num2
// const result = sum(50, 30)
// console.log(result);


// const sum = (a, b) => {
//     const result = a + b
//     return result
// }
// console.log(sum(5, 6));


// const numbers = [6, 4, 8, 7, 3]
// console.log(...numbers);


// const products = [
//     { name: 'Phone', price: 10000, color: 'Black' },
//     { name: 'Laptop', price: 40000, color: 'Silver' },
//     { name: 'Mouse', price: 800, color: 'Grey' },
//     { name: 'Keyboard', price: 1200, color: 'Red' },
//     { name: 'Pendrive', price: 300, color: 'Black' },
// ];

// const showPrice = products.map(i => i.price)
// console.log(showPrice);

// const showName = products.map(i => i.name)
// console.log(showName);



// for (product of products) {
//     console.log(product);
// }

// products.forEach(product => {
//     console.log(product);
// })



// const cheapProducts = products.filter(product =>
//     product.price <= 1000
// )
// console.log(cheapProducts);


// const checkByName = products.filter(product =>
//     product.name.includes('p')
// )
// console.log(checkByName);


// const [num1, num2] = [50, 90]
// console.log(num1);



// const { name, age } = { name: 'mahbubur', age: 5 }
// console.log(name);
// console.log(age);

// let student = {
//     name: 'Mahbubur',
//     id: 3895,
//     department: 'Computer Science'
// }

// const { name, id, department } = student
// console.log(name);
// console.log(department);


// let myDesktopPC = {
//     cpu: 'i5-10400',
//     motherboard: 'Aorus B460',
//     ram: {
//         slot1: 'Corsair 8GB',
//         slot2: 'Corsair 8GB',
//     },
//     storage: {
//         1: 'Corsair 240GB',
//         2: 'WD 120GB'
//     },
//     psu: 'Corsair CV450',
//     case: 'NZXT H510',
// }

// const { cpu, motherboard } = myDesktopPC
// console.log(cpu);
// const { slot1, slot2 } = myDesktopPC.ram
// console.log(slot1, slot2);



// const car = {
//     brand: 'BMW',
//     about: {
//         model: '540i',
//         modelYear: 2021
//     }
// }

// const convert = JSON.stringify(car)
// console.log(convert);



const myDesktopPC = {
    cpu: 'i5-10400',
    motherboard: 'Aorus B460',
    ram: {
        slot1: 'Corsair 8GB',
        slot2: 'Corsair 8GB',
    },
    storage: {
        1: 'Corsair 240GB',
        2: 'WD 120GB'
    },
    psu: 'Corsair CV450',
    case: 'NZXT H510',
}

// const showKeys = Object.keys(myDesktopPC)
// console.log(showKeys);

// const showValues = Object.values(myDesktopPC)
// console.log(showValues);

const showBoth = Object.entries(myDesktopPC)
console.log(showBoth);