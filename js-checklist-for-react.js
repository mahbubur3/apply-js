// ! declare variable
// let season = 'winter';
// season = 'summer';
// console.log(season);

// const season = 'winter';
// season = 'summer';
// console.log(season);

// const name = 'Mahbub';
// console.log(name);


// ! condition
// let foodReady = true;
// if (foodReady == true) {
//     console.log('i will eat!!');
// }

// const myAge = 5;
// const hisAge = 4;
// if (myAge > hisAge) {
//     console.log('i am elder');
// } else {
//     console.log('he is elder');
// }

// let manageMoney = false;
// let laptopPrice = 50000;
// if (manageMoney === false && laptopPrice > 40000) {
//     console.log('dont buy this phone');
// } else {
//     console.log('buy this phone');
// }


// ! array
// let countryName = ['Japan', 'China', 'Sweden', 'Canada', 'USA', 'Finland'];
// if (countryName[3] === 'China') {
//     console.log('i want to go to china');
// } else if (countryName[5] === 'Finland') {
//     console.log('i want to go to finland');
// } else {
//     console.log('dont go to another country');
// };

// numbers = [50, 30, 20, 60, 33, 90, 10]
// console.log(numbers);
// console.log(numbers[4]);
// let arrayLength = numbers.length;
// console.log(arrayLength);
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }

// numbers = [50, 30, 20, 60, 33, 90, 10];
// console.log(numbers.indexOf(60));

// numbers = [50, 30, 20, 60, 33, 90, 10];
// let countIndex = numbers.indexOf(33);
// console.log(countIndex);

// numbers = [50, 30, 20, 60, 33, 90, 10];
// numbers[5] = 100;
// console.log(numbers);

// friends = ['john', 'shine', 'jany', 'devid', 'mey', 'jaime'];
// friends[2] = 'bell';
// console.log(friends);

// friends = ['john', 'shine', 'jany', 'devid', 'mey', 'jaime'];
// friends.push('smith');
// console.log(friends);

// numbers = [56, 43, 98, 67, 45, 33, 89, 60];
// numbers.push(88);
// console.log(numbers);

// numbers = [56, 43, 98, 67, 45, 33, 89, 60];
// numbers.sort();
// console.log(numbers);


// ! for loop
// friends = ['john', 'shine', 'jany', 'devid', 'mey', 'jaime'];
// for (let i = 0; i < friends.length; i++) {
//     let friend = friends[i];
//     console.log(friend);
// }

// numbers = [50, 30, 20, 60, 33, 90, 10];
// for (let number of numbers) {
//     console.log(number);
// }


// ! while loop
// let num = 1;
// while (num < 10) {
//     console.log(num);
//     num = num + 1;
// }

// let num = 1;
// while (num < 51) {
//     console.log(num);
//     num = num + 1;
// }

// * show even numbers using while loop
// let num = 2;
// let endNumber = 50;
// while (num < endNumber) {
//     console.log(num);
//     num = num + 2;
// }

// * sum of natural numbers
// let i = 1;
// let sum = 0;
// while (i <= 11) {
//     sum = sum + i;
//     i = i + 1;
// }
// console.log(sum);

// let i = 1, sum = 0;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         sum = sum + i
//     }
//     i = i + 1;
// }
// console.log(sum);


// ! function
// function student() {
//     console.log('Jhon Smith');
//     console.log('Developer');
//     console.log('NY, USA');
// }
// student();

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// console.log(sum(10, 20));


// ! object
// let studentInfo = {
//     name: 'John Smith',
//     id: 236589,
//     department: 'Computer Engineering'
// }
// console.log(studentInfo);
// console.log(studentInfo.department); // ? 1st way
// console.log(studentInfo['department']); // ? 2nd way (string '' er moddhe rakhte hobe otherwise kaj korbe nah)

// let laptop = {
//     brand: 'HP',
//     model: 'Pavilion 15',
//     cpu: 'AMD Ryzen 5 5500U',
//     ram: {
//         slot1: '4GB',
//         slot2: '4GB'
//     },
//     storage: '512GB M.2 SSD'
// }
// console.log(laptop);
// console.log(laptop.ram.slot2);
// let showStorage = 'storage';
// console.log(laptop[showStorage]); // ? 3rd way


// ! template string
// console.log('Hello!\n This is Mahbubur Rahman.\n Studies Computer Engineering.');

// console.log(`Hello!
// This is Mahbubur Rahman.
// Studies Computer Engineering.`);

// let num1 = 10, num2 = 50, sum;
// sum = num1 + num2;
// console.log(`The result is ${sum}`);

// let firstName = 'Mahbubur', lastName = 'Rahman';
// console.log(`Full name: ${firstName} ${lastName}`);

// let student = {
//     name: 'Mahbubur Rahman',
//     id: 95,
//     department: 'CST',
//     shift: '2nd',
//     friends: ['Siddik', 'Sakib', 'Samaun', 'Bilash', 'Mahfuz']
// };
// let about = `Hello! I'm ${student.name}. My id is ${student.id}. Department of ${student.department}. ${student.friends[2]} is the genius in my friend circle.`;
// console.log(about);


// ! arrow function
// let sum = () => 5 + 25;
// let result = sum();
// console.log(result);

// let addTwo = (a, b) => a + b;
// console.log(addTwo(50, 20));

// let addThree = (x, y, z) => x + y + z;
// let result = addThree(5, 6, 7);
// console.log(result);

// let multiply = (a, b) => {
//     let result = a * b;
//     return result
// };
// console.log(multiply(10, 2));


// ! spread operator
// let numbers = [6, 5, 8, 4, 2, 9];
// console.log(numbers);
// console.log(...numbers);

// * Copy Array Using Spread Operator
// let array1 = [6, 5, 8, 9];
// let array2 = [...array1, 4, 3, 1, 2, 7]
// console.log(array2);

// let numberList1 = [10, 60, 50];
// let numberList2 = [...numberList1, 90, 20, 80];
// console.log(numberList2);


// ! array methods (map, filter, find, foreach)
// * map
// let products = [
//     { name: 'Phone', price: 10000, color: 'Black' },
//     { name: 'Laptop', price: 40000, color: 'Silver' },
//     { name: 'Mouse', price: 800, color: 'Grey' },
//     { name: 'Keyboard', price: 1200, color: 'Red' },
//     { name: 'Pendrive', price: 300, color: 'Black' },
// ];
// let showPrice = products.map(i => i.price);
// console.log(showPrice);

// let showName = products.map(i => i.name);
// console.log(showName);


// * foreach
// let products = [
//     { name: 'Phone', price: 10000, color: 'Black' },
//     { name: 'Laptop', price: 40000, color: 'Silver' },
//     { name: 'Mouse', price: 800, color: 'Grey' },
//     { name: 'Keyboard', price: 1200, color: 'Red' },
//     { name: 'Pendrive', price: 300, color: 'Black' },
// ];

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
// products.forEach(product => {
//     console.log(product.name);
// })


// * filter
// let products = [
//     { name: 'Phone', price: 10000, color: 'Black' },
//     { name: 'Laptop', price: 40000, color: 'Silver' },
//     { name: 'Mouse', price: 800, color: 'Grey' },
//     { name: 'Keyboard', price: 1200, color: 'Red' },
//     { name: 'Pendrive', price: 300, color: 'Black' },
//     { name: 'USB Hub', price: 200, color: 'White' }
// ];

// let cheapProducts = products.filter(product => product.price <= 1000);
// console.log(cheapProducts); // ? give all the output below 1000 thousand doller

// let checkByName = products.filter(product => product.name.includes('e'));
// console.log(checkByName);


// * find
// let products = [
//     { name: 'Phone', price: 10000, color: 'Black' },
//     { name: 'Laptop', price: 40000, color: 'Silver' },
//     { name: 'Mouse', price: 800, color: 'Grey' },
//     { name: 'Keyboard', price: 1200, color: 'Red' },
//     { name: 'Pendrive', price: 300, color: 'Black' },
//     { name: 'USB Hub', price: 200, color: 'White' }
// ];

// let cheapProducts = products.find(product => product.price <= 1000);
// console.log(cheapProducts); // ? show first matching in the output

// let checkByName = products.find(product => product.name.includes('e'));
// console.log(checkByName);

// ? [Note: filter array er moddhe kore object akare data gula dibe aar find sorasori object akare output diya dibe]


// ! array and object destructuring and optional chaining
// * array
// let [num1, num2] = [50, 90]
// console.log(num1);
// console.log(num1, num2);

// let numbers = [50, 90]
// let [num1, num2] = numbers;
// console.log(num1);
// console.log(num2);

// let [c1, c2, c3, c4] = ['Red', 'Green', 'Blue', 'Yellow'];
// console.log(c3);

// function myNumbers(num1, num2) {
//     let numbers = [num1, num2];
//     return numbers;
// }

// console.log(myNumbers(50, 90));

// * object
// let { name, age } = { name: 'Mahbub', age: 10 };
// console.log(name);
// console.log(age);

// let student = {
//     name: 'Jhon Smith',
//     id: 95,
//     department: 'EEE'
// }

// let { name, id, department } = student;
// console.log(name);
// console.log(id);
// console.log(department);

// let laptop = {
//     brand: 'HP',
//     model: 'Pavilion 15',
//     cpu: 'AMD Ryzen 5 5500U',
//     ram: {
//         slot1: '4GB',
//         slot2: '4GB'
//     },
//     storage: '512GB M.2 SSD'
// }

// let { brand, cpu } = laptop;
// let { slot1, slot2 } = laptop.ram;
// console.log(brand);
// console.log(slot1, slot2);

// * optional chaining
// const adventurer = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah'
//     }
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);

// ? [Note: jodi ami specipic kichu kujte cai tahole seti nao thakte pare seikhetre optional chaining use korbo thikache]


// ! JSON
// const adventurer = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah'
//     }
// };

// const convertJson = JSON.stringify(adventurer);
// console.log(convertJson);

// ? [Note: JavaScript ke JSON a convert korte hole JSON.stringify likhte hoy ar JSON ke JavaScript a convert korte hole JSON.parse likhte hoy]


// ! fetch
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))


// ! keys and values
// let laptop = {
//     brand: 'HP',
//     model: 'Pavilion 15',
//     cpu: 'AMD Ryzen 5 5500U',
//     ram: {
//         slot1: '4GB',
//         slot2: '4GB'
//     },
//     storage: '512GB M.2 SSD'
// }

// let showKeys = Object.keys(laptop);
// console.log(showKeys);

// let showValues = Object.values(laptop);
// console.log(showValues);

// let showKeysAndValues = Object.entries(laptop);
// console.log(showKeysAndValues);


// ! array add or remove using 3 dots
// * add
// let products = [
//     { name: 'Phone', price: 10000, brand: 'Samsung' },
//     { name: 'Laptop', price: 40000, brand: 'Apple' },
//     { name: 'Mouse', price: 800, brand: 'Logitech' },
//     { name: 'Keyboard', price: 1200, brand: 'Fantech' },
//     { name: 'Pendrive', price: 300, brand: 'Adata' },
//     { name: 'USB Hub', price: 200, brand: 'Ugreen' }
// ];

// let newProduct = { name: 'Mouse Pad', price: 900, brand: 'Corsair' };
// let newProducts = [...products, newProduct];
// console.log(newProducts);

let products = [
    { name: 'Phone', price: 10000, brand: 'Samsung' },
    { name: 'Laptop', price: 40000, brand: 'Apple' },
    { name: 'Mouse', price: 800, brand: 'Logitech' },
    { name: 'Keyboard', price: 1200, brand: 'Fantech' },
    { name: 'Pendrive', price: 300, brand: 'Adata' },
    { name: 'USB Hub', price: 200, brand: 'Ugreen' }
];

// let removeProduct = products.filter(product => product.name !== 'Phone');
// console.log(removeProduct);

let removeProduct = products.filter(product => product.name !== 'Mouse');
console.log(removeProduct);