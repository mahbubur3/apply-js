/*
const products = [
    'Dell XPS 15 laptop',
    'ROG Phone 5',
    'MacBook Air laptop',
    'Galaxy Book Pro',
    'iPhone 7+ Phone',
    'Logitech Mouse',
    'ROG Strix Laptop',
    'laptop HP Pavilion',
    'Galaxy S8+ Phone'
]
const searching = 'laptop';
const output = [];
for (const product of products) {
    if (product.indexOf(searching) != -1) {
        output.push(product);
    }
}
console.log(output);
*/
// [ekhane kintu capital letter er Laptop nam gula ase nai. er jonno nicher code gula dekho]

/*
const products = [
    'Dell XPS 15 laptop',
    'ROG Phone 5',
    'MacBook Air laptop',
    'Galaxy Book Pro',
    'iPhone 7+ Phone',
    'Logitech Mouse',
    'ROG Strix Laptop',
    'laptop HP Pavilion',
    'Galaxy S8+ Phone',
    'Asus Zephyrus Laptop'
]
const searching = 'laptop';
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);
*/

// using includes
/*
const products = [
    'Dell XPS 15 laptop',
    'ROG Phone 5',
    'MacBook Air laptop',
    'Galaxy Book Pro',
    'iPhone 7+ Phone',
    'Logitech Mouse',
    'ROG Strix Laptop',
    'laptop HP Pavilion',
    'Galaxy S8+ Phone',
    'Asus Zephyrus Laptop',
    'ROG Master Motherboard'

]
const searching = 'laptop';
const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
*/

// using startswiths mane prothom a ja ache ta diye search deya...
const products = [
    'Dell XPS 15 laptop',
    'ROG Phone 5',
    'MacBook Air laptop',
    'Galaxy Book Pro',
    'iPhone 7+ Phone',
    'Logitech Mouse',
    'ROG Strix Laptop',
    'laptop HP Pavilion',
    'Galaxy S8+ Phone',
    'Asus Zephyrus Laptop',
    'ROG Strix Motherboard'
]
const searching = 'rog';
const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

