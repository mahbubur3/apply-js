// const numbers = [3, 4, 6, 8, 5, 9, 2, 1];
// const showBigNumbers = numbers.filter(num => num > 5);
// console.log(showBigNumbers);

// const numbers = [3, 4, 6, 8, 5, 9, 2, 1];
// const showBigNumbers = numbers.filter(num => num < 5);
// console.log(showBigNumbers);

let products = [
    { name: 'Phone', price: 10000, color: 'Black' },
    { name: 'Laptop', price: 40000, color: 'Silver' },
    { name: 'Mouse', price: 800, color: 'Grey' },
    { name: 'Keyboard', price: 1200, color: 'Black' },
    { name: 'Pendrive', price: 300, color: 'Black' },
]
let expensive = products.filter(product => product.price > 1000);
console.log(expensive);

// let findBlack = products.filter(product => product.color == 'Black');
// console.log(findBlack);

// prothom jetare pabe setare output a dibe...
let findBlack = products.find(product => product.color == 'Black');
console.log(findBlack);