var numbers = [3, 4, 5, 2, 6, 7];
console.log(numbers);


var numbers = [56, 7, 4, 90, 34, 21];
console.log(numbers.length);


var friends = ["jack", "smith", "john", "bell", "jamie"];
console.log(friends);

// show all elements...
let products = ["shirt, keyboard, charger, cable, light, shoe"];
for (let i = 0; i < products.length; i++) {
    let item = products[i];
    console.log(item);
}


// let products = ["shirt, keyboard, charger, cable, light, shoe"];
// for (let item of products) {
//     console.log(item);
// }


let ages = [56, 43, 23, 54, 78, 64, 89];
for (let showAges of ages) {
    console.log(showAges);
}